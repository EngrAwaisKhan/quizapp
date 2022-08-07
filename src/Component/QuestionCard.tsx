import React, { useState } from 'react';
import {questionPropsType} from './../Types/quiz_types';


const QuestionCard: React.FC<questionPropsType> = ({question, options, callback}) =>{
    let[selectedAnswer, setSelectedAnswer] = useState("");

    const handleSelection = (ev:any) => {
        // console.log(ev.target.value);
        setSelectedAnswer(ev.target.value);
    }

    return(
        <div className='question-container'>
            <div className='question'>
                <h4>{question}</h4>
            </div>
            <form className='question-form' onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, selectedAnswer)}>
                {options.map((opt:string, ind:number)=>{
                    return(
                        <div key={ind}>
                            <label  className='radio'>
                                <input 
                                type='radio' 
                                name='opt' 
                                value={opt} 
                                checked={selectedAnswer === opt}
                                onChange={handleSelection}
                                required
                                />
                                {opt}
                            </label>
                        </div>
                    )
                })}
                <input type="submit"  className='submit'/>
            </form>
        </div>
    )
}

export default QuestionCard;