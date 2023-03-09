import './App.css';
import {Box, Button, Text} from "@chakra-ui/react";
import {useState} from "react";


function Numbers (props) {
  const nums = Array.from(Array(10).keys()).map(
      number => {
        return (
            <Button
                onClick={(e) => {
                        if (props.data !== '0') props.onClick(props.data + e.target.innerHTML)
                        else props.onClick(e.target.innerHTML);
                    }
                }
                    key={number}
                    w='40px'
                    h='40px'
                    margin='4px'
            >
              {number}
            </Button>
        )
      }
  );
  return (
      <Box display='flex'
           flexWrap='wrap'
           w='150px'
      >
        {nums}
      </Box>
  )
}

function CountButton(props) {
    const expressions = / \+|\-|\/|\*| /;
    const lastNumber = props.data[props.data.length - 1];
    function checkExpressionType () {
        if (expressions.test(lastNumber)) return
        props.onClick(props.data + props.expression)
    }

    return (
        <Button m='4px' onClick={() => {props.onClick(props.data + props.expression)}}>
            {props.expression}
        </Button>
    )
}



function App() {

    const [counts, setCounts] = useState('0');
    const [result, setResult] = useState('');

    function applyExpression(countedNumber) {
        setCounts(countedNumber);
        setResult(eval(counts));
    }

  return (
    <div className="App">
      <Box display='flex'
           flexDirection='column'
           justifyContent='center'
           alignItems='center'
           h='100vh'
      >
          <Box display='flex'
               gap='5px'
               flexDirection='column'
               justifyContent='center'
               alignItems='center'
               w='200px'
          >
              <Box display='flex'
                   w='100%'
                   justifyContent='between'
              >
                  <Text display='flex'
                        justifyContent='start'
                        alignItems='center'
                        bg='gray.50'
                        w='100%'
                        h='38px'
                        px='4px'
                        borderRadius='8px'
                  >
                      {counts}
                  </Text>

                  <Text w='fit-content'
                        h='38px'
                        textColor='tomato'
                  >
                      {result}
                  </Text>
              </Box>
              <Box display='flex'>
                  <Numbers data={counts} onClick={setCounts}/>
                  <Box display='flex' flexDirection='column'>
                      <CountButton data={counts} expression={'+'} onClick={applyExpression}/>
                      <CountButton data={counts} expression={'-'} onClick={applyExpression}/>
                      <CountButton data={counts} expression={'*'} onClick={applyExpression}/>
                      <CountButton data={counts} expression={'/'} onClick={applyExpression}/>
                  </Box>
                  <Button bg='tomato' m='4px' onClick={() => {setResult(eval(counts))}}>
                      =
                  </Button>
              </Box>

          </Box>
      </Box>
    </div>
  );
}



export default App;
