import React from 'react';
import {  SearchContainer, SearchInput} from './style';

export default class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(evt)=>{
        const str = evt.target.value;
        const { onChange } = this.props;
        this.setState({ searchString: str });
        onChange(str);
    }
    render(){
        const { searchString } = this.state;
        return <SearchContainer>
                    <SearchInput
                        defaultValue={searchString}
                        value={searchString}
                        autoFocus={true}
                        type="text"
                        placeholder={`Enter Postal code`}
                        onChange={this.handleChange}
                        data-cy="search-input"
                    />
                </SearchContainer>
    }
}