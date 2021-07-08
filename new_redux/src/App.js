import './App.css';
import { connect } from "react-redux";

function App() {
  return (
    <div style={{padding: 20, border: '1px solid #ccc', marginTop: 100}}>
      <h1>Счетчик {this.props.counter} </h1>
      <button onClick={this.props.onAdd}>Добавить</button>
      <button onClick={this.props.onSub}>Вычесть</button>
    </div>
  );
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAdd: () => dispatch({type: "ADD"}),
        onSub: () => dispatch({type: "SUB"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
