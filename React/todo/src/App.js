import React from 'react';
import "./App.css";


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id:Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const  updatelist = list.filter(item => item.id !== id);
    this.setState({list:updatelist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }


  render(){
    return(
     <div className="app">
       <div className="header">
       
       <h1 className="app-title">Todo-List</h1>
       </div>
       <div className="container">
         <br/>
         <input
         type="text"
         className="input-text"
         placeholder="Write a Todo"
         required
         value={this.state.newItem}
         onChange={e => this.updateInput(e.target.value)}
         />
         <button className="add-btn"
         onClick={() => this.addItem(this.state.newItem)}
         disabled={!this.state.newItem.length}
         >Add Todo</button>
         
         <div className="list">
           <ul>
             {this.state.list.map(item => {
               return(
                 
                 <li key={item.id}>
                   <div className="list-type">
                   <div>
                   <input
                   type="checkbox"
                   name="idDone"
                   checked={item.isDone}
                   onChange={()=> {}}
                   />
                   
                   {item.value}
                   </div>
                   <div>
                   <button
                   className="btn"
                   onClick={() => this.deleteItem(item.id)}
                   >Delete</button>
                   </div>
                   </div>
                    <div className="divider"><hr></hr></div>
                 </li>
                 
                 
               )
               
             })}
              
             <li>
              
               <input className="list-input" type="checkbox" name="" id=""/>
               Record youtube videos
               <button className="btn">Delete</button>
               
             </li>
            

           </ul>
         </div>
         </div>
     </div>
    );
  }

}

export default App;