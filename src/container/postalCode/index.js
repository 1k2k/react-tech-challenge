import React from 'react';
import { uniqBy, sortBy } from 'lodash';
import { ElectedProfile } from '../../components/userProfile';
import fetchJsonp from "fetch-jsonp";
import SearchInput from '../../components/searchInput';
import { DefaultButton } from '../../components/button';
import { Label, Container } from '../../components/globalStyle';
import { LoadingUserBox } from '../../components/loading';

export default class PostalCodeContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            postCode: 'T2Z4M8',
            error: null,
            data: null,
            loading: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    componentDidMount(){
        this.onSubmit();
    }


    async onSubmit(){
      const { postCode, loading } = this.state;
      if(loading){
          return;
      };

      let self = this;

      if(postCode.length < 5){
          this.setState({ error: 'Postal code not valid', loading: false});
          return;
      }

      // Set loading 
      this.setState({ loading: true });

      try {
        let response = await fetchJsonp(`https://represent.opennorth.ca/postcodes/${postCode.replace(' ', '')}`, { timeout: 3000 });

        let jsonData = await response.json();
        if(jsonData){
            setTimeout(() => self.setState({ data: jsonData, error: null, loading: false }), 1000);
        }
        return;

      } catch(error) {
        this.setState({ error: 'Error with open north api', loading: false });
        console.log('Error ', error)
        return;
      }
      
    
    }

    onChange(value){
        let self = this;
        this.setState({ postCode: value }, () => self.onSubmit(value)); 
    }
    
    render(){
      const { data, error, loading }  = this.state;
      let ViewData = () => <div/>;

      if(data){
        let represents = data.representatives_centroid;
      
        let sorted  = sortBy(represents, el => el.elected_office !== 'MP');
        console.log('Sorted list', sorted);

        ViewData = () => sorted.map((repre, index) => <ElectedProfile key={`${index}`} user={repre}/>)
      }

      return <Container>
          <div style={{ display: 'flex'}}>
              <SearchInput onChange={(str) => this.onChange(str)} />
              <DefaultButton loading={loading} onClick={(str) => this.onChange(str)} >
                  Search
              </DefaultButton>
          </div>
          <div>
            { error && <Label style={{ color: 'red'}}> {error} </Label> }
          </div>
          {loading  && <React.Fragment>
            <LoadingUserBox />
            <LoadingUserBox />
            <LoadingUserBox />
            <LoadingUserBox />
          </React.Fragment>}
          <br/>
          <ViewData />
        </Container>
    }
}