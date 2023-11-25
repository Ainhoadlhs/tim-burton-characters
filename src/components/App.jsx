import { useState } from 'react';
import jack from '../images/jack.gif';
import sally from '../images/sally.gif';
import emily  from '../images/emily.gif';
import victor from '../images/victor.gif';
import lydia from '../images/lydia.gif';
import beetlejuice from '../images/beetlejuice.gif';
import kim from '../images/kim.gif';
import edward from '../images/edward.gif';
import vincent from '../images/vincent.gif';
import baradam from '../images/baradam.gif';
import alicia from '../images/alicia.gif';
import icha from '../images/ichabod.gif';
import bloom from '../images/bloom.gif';
import wednesday from '../images/wednesday.gif';
import sombrerero from '../images/sombrerero.gif';
import victorfran from '../images/victorfran.gif';

import '../styles/App.scss';

const questions = [
  {
    question: '¿Qué disfraz te gustaría más para Halloween?',
    options: ['Payaso', 'Esqueleto', 'Zombie', 'Asesino en serie']
  },
  {
    question: '¿Qué color te identifica más?',
    options: ['Rojo', 'Rosa', 'Verde', 'Negro']
  },
  {
    question: '¿Cómo te describirían tus amigos??',
    options: ['Misterioso', 'Leal', 'Excéntrico', 'Sensible']
  },
  {
    question: '¿Cuál es tu género cinematográfico favorito?',
    options: ['Fantasía', 'Terror', 'Drama', 'Comedia']
  },
  {
    question: '¿Cómo describirías tu personalidad?',
    options: ['Introvertida', 'Extrovertida', 'Melancólica', 'Creativa']
  },
  {
    question: '¿Qué estácion del año prefieres?',
    options: ['Invierno', 'Primavera', 'Verano', 'Otoño']
  },
  {
    question: '¿Qué lugar prefieres para pasar la tarde?',
    options: ['Biblioteca', 'Un parque', 'Una fiesta', 'En casa']
  },
  {
    question: '¿Qué fiesta te gusta más?',
    options: ['Halloween', 'Navidad', 'No me gustan demasiado las fiestas', 'Cualquier fiesta']
  },
  {
    question: '¿Qué elegirias como máscota?',
    options: ['Un gusano', 'Un gato', 'Un conejo', 'Un perro']
  },
  {
    question: '¿Cuál de estas frases te gusta más??',
    options: ['¿Por qué hay que ser siempre lo mismo? ¿Por qué no puedo tener... lo que hay en mi interior?', 'Si dos corazones están destinados a estar juntos, nada puede mantenerlos separados.', '¡Qué día más espléndido para un exorcismo!', 'La vida es breve, pero cuando se vive con dolor y dificultades, puede parecer eterna. Sin embargo, la vida es para vivirla, no para sufrirla.', ]
  },
];

const App = () => {
  const initialAnswers = Array(questions.length).fill(null);
  const [answers, setAnswers] = useState(initialAnswers);
  const [result, setResult] = useState({ text: '', image: '', slogan: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isWhoButtonVisible, setIsWhoButtonVisible] = useState(false);
  const [isAgainButtonVisible, setIsAgainButtonVisible] = useState(false);
  const [isStartButtonVisible, setIsStartButtonVisible] = useState(true);


  const handleAnswerChange = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  
    const nextQuestion = currentQuestion + 1;
  
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsWhoButtonVisible(true);
      setIsAgainButtonVisible(false);
    }
  
    if (isStartButtonVisible) {
      setIsStartButtonVisible(false); 
    }
  };
  
  const handleStartButtonClick = () => {
    setAnswers(initialAnswers);
    setResult({ text: '', image: '', slogan: '' });
    setCurrentQuestion(0);
    setIsWhoButtonVisible(false);
    setIsAgainButtonVisible(false);
    setIsStartButtonVisible(false);
  };
  

  const handleShowReset = () => {
    setAnswers(initialAnswers);
    setResult({ text: '', image: '', slogan: '' });
    setCurrentQuestion(0);
    setIsWhoButtonVisible(false);
    setIsAgainButtonVisible(false);
    setIsStartButtonVisible(true); 
  };

  const handleSubmit = () => {
    const selectedOptions = answers.map((answer) => {
      return answer || '';
    });

    const selectedOptionFirstQuestion = selectedOptions[8];
    const selectedOptionSecondQuestion = selectedOptions[9];

    const resultsMap = {
      'Un perro-¿Por qué hay que ser siempre lo mismo? ¿Por qué no puedo tener... lo que hay en mi interior?': {
        text: 'Jack Skellinton',
        image: jack,
        slogan: 'Si eres el tipo de persona que siempre está reinventándose a sí mismo, ¡eres como Jack! Siempre buscando nuevos proyectos y aventuras, ¡aunque a veces te pierdas un poco en tus ideas brillantes! Por cierto...¿También te gustaría cargarte la navidad?'
      },
      'Un conejo-¿Por qué hay que ser siempre lo mismo? ¿Por qué no puedo tener... lo que hay en mi interior?': {
        text: 'Alicia',
        image: alicia,
        slogan: 'Eres curioso y valiente, ¡nunca temes aventurarte en lo desconocido! Aunque a veces te encuentres en mundos extraños, ¡tu valentía y determinación te guían en cada paso del camino!',
      },
      'Un gato-¿Por qué hay que ser siempre lo mismo? ¿Por qué no puedo tener... lo que hay en mi interior?': {
        text: 'Sally',
        image: sally,
        slogan: 'Eres dulce y persistente como Sally. A veces te encuentras atrapado en situaciones difíciles, ¡pero siempre logras encontrar una solución ingeniosa y creativa! ¡Y tu ingenio es tan afilado como tus agujas de zurcir!',
      },
      'Un gusano-¿Por qué hay que ser siempre lo mismo? ¿Por qué no puedo tener... lo que hay en mi interior?': {
        text: 'Vincent Malloy',
        image: vincent,
        slogan: 'Tienes una imaginación desbordante y un amor por lo macabro. Aunque a veces te encuentras solo en tus pensamientos, ¡tus creaciones artísticas siempre dejan a todos asombrados!',
      },
      'Un perro-Si dos corazones están destinados a estar juntos, nada puede mantenerlos separados.': {
        text: 'Victor Van Dort',
        image: victor,
        slogan: 'Eres un alma gentil y considerada, como Victor. A veces te encuentras en situaciones complicadas, pero siempre demuestras valentía y determinación para superar los obstáculos. ¡Solo asegúrate de no perder la cabeza por el camino!'
      },
      'Un conejo-Si dos corazones están destinados a estar juntos, nada puede mantenerlos separados.': {
        text: 'Edward Bloom',
        image: bloom,
        slogan: '¡Eres un narrador nato con una imaginación desbordante! A veces, tus historias pueden parecer un poco exageradas, ¡pero eso solo le agrega un poco de chispa a tu encanto!',
      },
      'Un gato-Si dos corazones están destinados a estar juntos, nada puede mantenerlos separados.': {
        text: 'Barbara y Adam Maitland',
        image: baradam,
        slogan: 'Eres dos en uno, ¡siempre listo para enfrentar desafíos! Aunque a veces te encuentras en situaciones extrañas y divertidas, ¡Eres tan fuerte que siempre encuentras el camino de regreso!'
      },
      'Un gusano-Si dos corazones están destinados a estar juntos, nada puede mantenerlos separados.': {
        text: 'Emily',
        image: emily,
        slogan: 'Si te consideras una persona romántica y soñadora, ¡eres como Emily! Puedes tener un aire misterioso a tu alrededor, ¡pero eso solo te hace más intrigante!'
      },
      'Un perro-¡Qué día más espléndido para un exorcismo!': {
        text: 'Ichabod Crane',
        image: icha,
        slogan: 'Tienes una mente analítica y un toque de superstición. Aunque a veces tu imaginación pueda correr salvaje, ¡tu inteligencia aguda siempre te ayuda a resolver los misterios más intrincados!'
      },
      'Un conejo-¡Qué día más espléndido para un exorcismo!': {
        text: 'Miércoles Addams',
        image: wednesday,
        slogan: 'Tienes un toque siniestro y un humor mordaz, ¡pero eso es parte de tu encanto! Aunque a veces tu pasión por lo oscuro pueda asustar a los demás, ¡tus seres queridos siempre saben que tienes un corazón de oro!'
      },
      'Un gato-¡Qué día más espléndido para un exorcismo!': {
        text: 'Lydia Deezt',
        image: lydia,
        slogan: 'Tienes un toque de drama y una fascinación por lo oscuro, ¡pero eso es lo que te hace interesante! Aunque te encanta tu tiempo a solas, ¡no te importa hacer una entrada dramática cuando es necesario!',
      },
      'Un gusano-¡Qué día más espléndido para un exorcismo!': {
        text: 'Beetlejuice',
        image: beetlejuice,
        slogan: 'Eres la vida de la fiesta, ¡con un toque travieso! Siempre listo para animar el ambiente y no te preocupas demasiado por las normas. ¡Solo asegúrate de no meterte en problemas por tus travesuras!',
      },
      'Un perro-La vida es breve, pero cuando se vive con dolor y dificultades, puede parecer eterna. Sin embargo, la vida es para vivirla, no para sufrirla.': {
        text: 'Victor Frankenstein',
        image: victorfran,
        slogan: 'Tienes una mente brillante y estás obsesionado con desentrañar los misterios del mundo. Aunque a veces tus experimentos puedan salir un poco mal, ¡tu dedicación y ambición son verdaderamente admirables!'
      },
      'Un conejo-La vida es breve, pero cuando se vive con dolor y dificultades, puede parecer eterna. Sin embargo, la vida es para vivirla, no para sufrirla.': {
        text: 'El Sombrerero Loco',
        image: sombrerero,
        slogan: 'Eres excéntrico y lleno de energía, ¡siempre listo para celebrar la vida al máximo! Aunque a veces puedas parecer un poco desquiciado, ¡tu espíritu libre es contagioso y no se puede resistir!'
      },
      'Un gato-La vida es breve, pero cuando se vive con dolor y dificultades, puede parecer eterna. Sin embargo, la vida es para vivirla, no para sufrirla.': {
        text: 'Kim Boggs',
        image: kim,
        slogan: 'Eres amable y compasivo, ¡con un corazón enorme! A veces puedes estar un poco perdido en tus pensamientos, pero siempre te preocupas profundamente por los que te rodean.',
      },
      'Un gusano-La vida es breve, pero cuando se vive con dolor y dificultades, puede parecer eterna. Sin embargo, la vida es para vivirla, no para sufrirla.': {
        text: 'Eduardo Manostijeras',
        image: edward,
        slogan: 'Eres el tipo de persona con talentos únicos y una visión única del mundo. Aunque a veces te sientes como un pez fuera del agua, ¡tu individualidad es tu mayor fortaleza!',
      },

    };

    const key = `${selectedOptionFirstQuestion}-${selectedOptionSecondQuestion}`;

    const finalResult = resultsMap[key] || { text: 'No hay resultados', image: '' };

    setResult(finalResult);
    setIsWhoButtonVisible(false); 
    setIsAgainButtonVisible(true); 
  };


  return (
    <div className='body'>
      <header className='header'>
      </header>
      <main className='main'>
            {isStartButtonVisible ? (
        <div className='btn__div'>
          <button onClick={handleStartButtonClick} className='btnStart'>
            ¡Comenzar test!
          </button>
        </div>
        ) : result.text ? (
          <div className='result'>
            <p className='result__title'>{result.text}</p>
            {result.image && <img src={result.image} alt='Resultado' className='result__img' />}
            <p className='result__slogan'>{result.slogan}</p>
          </div>
        ) : (
          <div className='questions'>
            <div className='questions__div'>
              <p className='questions__div--p'>{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, optionIndex) => (
                <div key={optionIndex} className='questions__div--div'>
                  <input
                    type='radio'
                    id={`${currentQuestion}-${optionIndex}`}
                    name={`question${currentQuestion}`}
                    value={option}
                    onChange={() => handleAnswerChange(option)}
                    checked={answers[currentQuestion] === option}
                    className='questions__div--div--input'
                  />
                  <label htmlFor={`${currentQuestion}-${optionIndex}`} className='questions__div--div--label'>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
  
        <div className='btn'>
        {isWhoButtonVisible && currentQuestion === questions.length - 1 && !result.text ? (
  <div className='btn__div'>
    <button onClick={handleSubmit} className='btn__div--who'>
      ¡Dime a quién me parezco!
    </button>
  </div>
) : null}

  
          {isAgainButtonVisible ? (
            <div>
              <button onClick={handleShowReset} className='btn__div--again'>
                ¡Comenzar de nuevo!
              </button>
            </div>
          ) : null}
        </div>
      </main>
        <footer className='footer'>
          <span className='footer__dedicatoria'>Con cariño para todos los fans de Tim Burton 🎃✂🦇🎥💀👽</span>
          <span className='footer__autor'>© Ainhoadlhs 2023</span>
        </footer>
    </div>

  );
  
};

export default App;