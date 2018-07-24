import React, { Component}  from 'react';

import { HelpBlock, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Search extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 3) return 'success';
    if (length > 0 && length < 3) return 'error';
    return null;
  }

  handleChange(e) {
    const searchText = e.target.value;
    this.setState({ value: searchText });
    this.props.callBack(searchText);
  }

 render() {
   return (
     <form>
       <FormGroup
         controlId="formBasicText"
       >
         <ControlLabel>Search images</ControlLabel>
         <FormControl
           type="text"
           value={this.state.value}
           placeholder="Enter text"
           onChange={this.handleChange}
         />
         <FormControl.Feedback />
         <HelpBlock>Validation is based on string length.</HelpBlock>
       </FormGroup>
     </form>
   );
 }
}

export default  Search;
