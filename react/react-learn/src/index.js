import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('root')
)

// 
var arr=[];
for (let i = 0; i < 6; i++) {
    var p = <p className="myP" key={i}>这是个P标签</p>;
    arr.push(p);

}

var vDom=(
    <div>
        Hello,React!
        {arr}
    </div>
);
ReactDOM.render(vDom,document.getElementById('root'));

//构造函数是组件
// React在解析所有标签的时候，是以标签的首字母来区分的：如果标签的首字母是小写，就按照普通的 HTML 标签来解析；如果首字母是大写，则按照 **组件**的形式来解析。
// 
function Hello() {
    return (
        <div>
            <h3>这是hello组件中定义的元素</h3>
        </div>
    );
}

ReactDOM.render(<Hello></Hello>,
    document.getElementById('root')
);

// 父组件传值
// 	  // 在子组件中，如果想要使用外部传递过来的数据，必须显示的在 构造函数参数列表中，定义 props 属性来接收
	  // 通过 props 得到的任何数据都是只读的，不能重新赋值
// var person={
//     name:'huiren',
//     age:27,
//     gender:'male',
//     address:'hangzhou',
// };

// function Hello1(props) {
//     return (
//         <div>
//             <h3>这是Hello子组件中定义的元素：{props.name}</h3>
//         </div>
//     );
// }

// ReactDOM.render(
//     <Hello1 {...person}></Hello1>,
//     document.querySelector('#root')
// );

// 方式2
class Hello2 extends React.Component {
    constructor(props){
        super(props);
        console.log(props.name);
        this.state={
            msg:'这是Hello2组件的私有msg数据',
            info:'永不止步',
        };
    }
    render(){
        return (
            <div>
                <h3>这是使用class类创建的组件</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Hello2 name={'world-beater'}></Hello2>
    </div>,
    document.querySelector('#root')
);

// 基于上面的区别，我们可以为这两种创建组件的方式下定义： 使用 function 创建的组件，叫做【无状态组件】；使用 class 创建的组件，叫做【有状态组件】。
// **本质区别**：

// 有状态组件和无状态组件，最本质的区别，就是有无 state 属性。同时， class 创建的组件，有自己的生命周期函数，但是，function 创建的 组件，没有自己的生命周期函数。

// **什么时候使用 有状态组件，什么时候使用无状态组件**：

// - （1）如果一个组件需要存放自己的私有数据，或者需要在组件的不同阶段执行不同的业务逻辑，此时，非常适合用 class 创建出来的有状态组件。

// - （2）如果一个组件，只需要根据外界传递过来的 props，渲染固定的页面结构即可的话，此时，非常适合使用 function 创建出来的无状态组件。（使用无状态组件的小小好处： 由于剔除了组件的生命周期，所以，运行速度会相对快一点点）。


// 时钟案例

// 代码实现更新state，而React会监测到state的变化，然后重新渲染DOM
// 修改state，不能直接用 =  ，构造函数是唯一可以给 this.state 赋值的地方：

// this.setState({comment: 'Hello'});
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date:new Date()});
    }

    render(){
        return (
            <div>
                <h1>Hello,master， </h1>
                <h2>It is  {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(<Clock />,document.querySelector('#root'));

// state和props被同时使用时,让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

// 事件处理
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('the link was clicked');
    }

    return (
        <a href="javascript:;" onClick={handleClick}>
            Click me
        </a>
    )
}

ReactDOM.render(<ActionLink />,document.querySelector('#root'));


// 事件处理函数，一般声明在class中
// 切换开关案例
class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state={isToggleOn:true};
        // 为了在回调中使用‘this’，这个绑定必不可少
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state=>({
            isToggleOn:!state.isToggleOn
        }));
        console.log(this);
        console.log(this.handleClick);
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        )
    }
}
ReactDOM.render(
    <Toggle />,
    document.querySelector('#root')
)

// 条件渲染
// 根据不同状态，只渲染对应状态下的部分内容‘
function UserGreeting(props) {
    return <h1>Welcome back！</h1>
}
function GuestGreeting() {
    return <h1>Please sign up</h1>
}
function Greeting(props) {
    console.log(props);
    console.log(props.isLoggedIn);
    const isLoggedIn=props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={true}/>,
    document.querySelector('#root')
)

// 表单元素
class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state={value:''};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value});

    }
    handleSubmit(e){
        alert('提交的名字：'+this.state.value);
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input value={this.state.value} onChange={this.handleChange} />
                    
                </label>
                <input type='submit' value='提交'/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.querySelector('#root')
)

// 状态提升
function BoilingVerdict(props){
    if (props.celsius>=100) {
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>;
}

// class Calculator extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//         this.state={temperature:''};
//     }
//     handleChange(e){
//         this.setState({temperature:e.target.value});
//     }
//     render(){
//         const temperature=this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in celsius:</legend>
//                 <input 
//                     value={temperature}
//                     onChange={this.handleChange}/>
//                 <BoilingVerdict 
//                     celsius={parseFloat(temperature)}/>
//             </fieldset>
//         )
//     }
// }

const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
};
function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}
function tryConvert(temperature,convert){
    const input=parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}
class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        // this.state={temperature:''};
    }
    handleChange(e){
        // this.setState({temperature:e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
        this.state={temperature:'',scale:'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature});

    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature});
    }
    render(){
        const scale=this.state.scale;
        const temperature= this.state.temperature;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return (
            <div>
                <TemperatureInput
                 scale='c'
                 temperature={celsius}
                 onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                 scale='f'
                 temperature={fahrenheit}
                 onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict 
                celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
ReactDOM.render(
    <Calculator />,
    document.querySelector('#root')
)

// 组合

function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog(){
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>
                Welcome
            </h1>
            <p className='Dialog-message'>
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.querySelector("#root")
)