import { Component } from "react";
import check from './photothree.jpg'


export class GroceryList extends Component{

state = {
    userInput: ' ',
    groceryList: []
}

onChangeEvent(e){
    this.setState({userInput:e})
}

addItem(input){
    if (input === ' '){
        alert("Please enter an item!")
    }
    else{
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList:listArray, userInput: ' '})
    }
}

croccedWord(event){
    const li = event.target;
   li.classList.toggle('crocced')
}

deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList:listArray})
}

onFormSumbit(e){
    e.preventDefault()
}

render (){
    return(
    <form onSubmit={this.onFormSumbit}>
    <div className="container">
    <input type="text"
    placeholder="What you want to buy today?"
    onChange={(e) => {this.onChangeEvent (e.target.value)}}
    value={this.state.userInput}/>
    </div>
    
    <div className="container">
        <button onClick={()=> this.addItem(this.state.userInput)} className="btn add" >Add</button>
    </div>
    <ul>
        {this.state.groceryList.map((item,index) => (
        <li onClick={this.croccedWord}
            key = { index }>
                <img src={check} width="40px" alt="check-box"/>npm start
                {item}
        </li>
        ))}
    </ul>
    <div className="container">
        <button onClick={()=> this.deleteItem()} className="btn delete" >Delete</button>
    </div>
    </form> 
    )
}
}



