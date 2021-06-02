import { Fragment } from 'react'
import Button from '@material-ui/core/Button';

function App () {
  return (
    <Fragment>
      <div className="App">
        <h1>This is React App.</h1>
      </div>
      <div className="App-other">
        <h1>This is React App-other.</h1>
      </div>
      <Button variant="contained" color="primary">
        你好，世界
    </Button>
    </Fragment>
  )
}

export default App