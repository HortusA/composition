import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    
const UpdatedState = [
    {id:0, value:1,name:"Материнская плата"},
    {id:1, value:2,name:"ОЗУ"},
    {id:2, value:1,name:"hdd"},
    {id:3, value:1,name:"CPU"},
  ]
const [counters,setCounters] = useState(UpdatedState)

const hendleReset = () => {setCounters(UpdatedState)}

const handleDelete = (id) => {
    const newCount = counters.filter(c=> c.id !==id)
    setCounters(newCount)
}

const handleIncrement = (id) => {
    const countInc = counters.map((count) => {
        if(id ===count.id){
            count.value+=1
        }
        return count
    })
    setCounters(countInc)
}

const handleDicrement = (id) => {
    const countDec = counters.map((count) => {
        if(id ===count.id){
            count.value-=1
        }
        return count
    })
    setCounters(countDec)
}

    return (
        <>
        {counters.map((count) =>(
            <Counter key = {count.id}
                           {...count} 
                           onDicrement = {handleDicrement} 
                           onIncrement = {handleIncrement}  
                           onDelete = {handleDelete}/>
                                )       
        )}
        <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>сброс</button>
        </>
    )



}

export default CountersList