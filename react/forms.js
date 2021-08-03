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
    document.querySelector('#forms')
)