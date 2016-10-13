import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'

class App extends Component {
  
  
  state ={
    input:"",
    lists:[
      
    ] 
  }
  
  onChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  };
  
  onKeyUp=(e)=>{
   if(e.key=== 'Enter')
   {
   let tmp = this.state.lists;
   tmp.unshift(this.state.input);
   this.setState({
    lists:tmp,
    input:""
      }); 
     }    
  };
  
  
deleteTask=(index)=>{
  return ()=>{
    var tmp = this.state.lists;
    tmp.splice(index,1);
    this.setState({
      
    });
  };
}
  
  render() {
  
  const formStyle={
    textAlign:"center"  
   
  };
  
  const inputStyle={
    width:"300px",
    height:"50px",
    borderRadius: "20px",
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 'large',
    marginTop: "20px",
    opacity: 0.6
 
   
  };
  
  
  var items = this.state.lists.map((item,i)=>{
 
    return(
      <TodoItem item={item} 
      key={i}
      onDeleteTask={this.deleteTask(i)}
      />      
    )
    
  });


    return (
      
      <div className="App">
      
       <div className="todoAppHeader">T O D O A P P  </div>  
       <div style={formStyle}>
<br/>
       <input style={inputStyle} type="text" 
                                 onChange={this.onChange}
                                 placeholder="How You Feelin Right Now"
                                 onKeyUp={this.onKeyUp}
                                 value={this.state.input}
                                 />
              
       </div>
       {items}
       </div>
      
      
      
    );
  }
}

export default App;