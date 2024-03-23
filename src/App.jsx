import './assets/question.css'
import Question from "./Question.jsx";

'./Question.jsx';

const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "When can I get it?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];


function App(){
    return (
        <div className="container">
            <h2>F.A.Q</h2>
            <div className="questions">
                {questions.map((value, index) => {
                    return <Question value={value} key={index} />
                })}
            </div>
        </div>
    )
}

export default App;