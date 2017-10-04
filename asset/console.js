var React = require('react');
var _ = require('lodash');
var Draggable = require('react-draggable');

var	debug = require('debug')('react-console');

var Console = React.createClass({
	getInitialState() {
		var props = this.props.log;
		var msg = _.isArray(props.messages) ? props.messages : props.messages ? [props.messages] : [];
		var doc = _.isArray(props.docs) ? props.docs : props.docs ? [props.docs] : [];
		var err = _.isArray(props.error) ? props.error : props.error ? [props.error] : [];
		
		this._cache;
		this._repeat = 1;
		this._sync = 0;
		this._ui = {}
		
		return { 
			log: msg.concat(doc,err),
			alive: props.alive,
			fullscreen: false
		};
	},
	componentWillReceiveProps(props) {
		debug('console received props', props)
		var _this = this;
		if(props.alive !== this.state.alive) {
			_this.setState({alive: props.alive});
		}
		
		var logs = props.log;
		
		// object
		var docs = _.isArray(logs.doc) ? logs.doc : logs.doc ? [logs.doc] : []
		_.each(docs, function(m) {
			var push = _this.state.log;
			try {
				var mm = JSON.stringify(m, null, 4);
			} catch(e) {
				var mm = 'doc not parsed'
			}
			if(mm && mm !== _this._cache) {
				push.push(<pre>{mm}</pre>);
				_this.setState({log:  push });
				_this._repeat = 1;
			} else {
				_this._repeat++;
				_this._sync++;
				if(_this._repeat > 4 && _this._repeat % 5 === 0) {
					_this._sync--;
					push.push(<pre>{mm}</pre>);
					push.push(<div className="repeatlog">Log entry below repeated {_this._repeat} times</div>);
					_this.setState({log:  push });
				}
			}
				
			_this._cache = mm;
		});
		
		// error
		var error = _.isArray(logs.error) ? logs.error : logs.error ? [logs.error] : []
		_.each(error, function(m) {
			var push = _this.state.log;
			if(m && m !== _this._cache) {
				push.push(<div className="bg-danger" dangerouslySetInnerHTML={{__html:m}} />);
				_this.setState({log:  push });
				_this._repeat = 1;
			} else {
				_this._repeat++;
				_this._sync++;
				if(_this._repeat > 4 && _this._repeat % 5 === 0) {
					_this._sync--;
					push.push(<div className="bg-danger" dangerouslySetInnerHTML={{__html:m}} />);
					push.push(<div className="repeatlog">Log entry below repeated {_this._repeat} times</div>);
					_this.setState({log:  push });
				}
			}
				
			_this._cache = m;
			
		});
		
		// standard message
		var msg = _.isArray(logs.message) ? logs.message : logs.message ? [logs.message] : []
		_.each(msg, function(m) {
			var push = _this.state.log;
			if(m && m !== _this._cache) {
				push.push(<div dangerouslySetInnerHTML={{__html:m}} />);
				_this.setState({log:  push });
				_this._repeat = 1;
			} else {
				_this._repeat++;
				_this._sync++;
				if(_this._repeat > 4 && _this._repeat % 5 === 0) {
					_this._sync--;
					push.push(<div dangerouslySetInnerHTML={{__html:m}} />);
					push.push(<div className="repeatlog">Log entry below repeated  {_this._repeat} times</div>);
					_this.setState({log:  push });
				}
			}
			 
			_this._cache = m;
		});
		
		// clean up the log array 
		if(this.state.log.length > 500) {
			this.setState({ log: this.state.log.splice(0,200) });
		}
	},
    handleStop: function (event, ui) {
        this._ui = ui.position;
    },
	render() {
		
		var _this = this;
		if(_.isArray(this.state.log) && this.state.log.length > 0) {

			var rev = this.state.log;
			var num = _this._sync;
			var map = rev.map(function(entry, k) {
				num++;
				return (<div className="clearfix" key={k}>
					<div className="col-sm-1">{num}</div>
					<div className="col-sm-11">{entry}</div>
				</div>);
			}).reverse();
		} else {
			var map = <span />
		}
		
		var cmd = this.props.alive ? (<div className="col-sm-8 no-padding" ><form onSubmit={this.command}><div className="col-sm-10 no-padding">
				<input type="text" ref="console" className="form-control" />
				</div>
				<div className="col-sm-2  no-padding">
				<a href="#" onClick={this.command} className="btn btn-sm btn-info ">Emit</a>
				</div></form></div>) : <div className="col-sm-8 " ><span /></div>
		
		var clear = this.props.alive ? 
				<span>
					<a title="Erase console" href="#" onClick={this.clear} className="btn btn-sm btn-danger pull-right"><span className="glyphicon glyphicon-erase" /></a> 
				</span>
			: 
				<span />
		
		var classy = " console no-padding ";
		var add = this._ui.top ? {start: {x: this._ui.left, y: this._ui.top}} : {};
		debug(add)
		if(!this.props.alive) {
			classy += ' close ';
			if(this._ui.top) add = {start: {x: 0, y: 0}};
		} else if(this.state.fullscreen) {
			classy += ' fullscreen '; 
			add = {start: {x: 0, y: 0}}; 
		}	
		
		var minimize = this.props.alive ? <a title="minimize console" href="#" onClick={this.toggle} className="btn btn-sm btn-default pull-right"><span className="glyphicon glyphicon-minus" /></a> : <span />
		
		var maximize;
		var move = <span />;
		if((this.props.alive && !this.state.fullscreen) || (!this.props.alive && this.state.fullscreen)) {
			maximize = <span><a title="fullscreen" href="#" onClick={this.screen} className="btn btn-sm btn-default pull-right"><span className="glyphicon glyphicon-fullscreen" /></a></span>
			if(!this.props.fullscreen && this.props.alive) move = <div title="move console"  className="btn btn-sm btn-warning pull-right handle"><span className="handle glyphicon glyphicon-move" /></div>;
		} else if(this.props.alive) {
			maximize = <a title="small window" href="#" onClick={this.screen} className="btn btn-sm btn-default pull-right"><span className="glyphicon glyphicon-modal-window" /></a>
			
		} else {
			maximize = <a title="View Console" href="#" onClick={this.screen} className="btn btn-sm btn-default pull-right"><span className="glyphicon glyphicon-modal-window" /></a>
		}
		
		return (<Draggable
                handle=".handle"                
                zIndex={1000}
                moveOnStartChange={true}
                onStop={this.handleStop}
                {...add}
                bounds="parent">
						<div className={classy}>
							{cmd}
							<div className="col-sm-4 no-padding"> {move}<span className="pull-right"> &nbsp; </span> {minimize}<span className="pull-right"> &nbsp; </span>{maximize}<span className="pull-right"> &nbsp; </span>{clear} </div>
							<div className="clearfix msg no-padding" >
								{map}	
							</div>	
						</div>
					
		</Draggable>);	
	},
	clear() {
		this._cache = false;
		this._repeat = 1;
		this._sync = 0;
		this.setState({log:[]});
	}, 
	command(e) {
		e.preventDefault();
		if(_.isFunction(this.props.command)) {
			this.props.command(this.refs.console.getDOMNode().value);
		}
		
	},
	toggle(e) {
		e.preventDefault();
		if(_.isFunction(this.props.toggle)) {
			this.props.toggle(e);
		}
	},
	screen(e) {
		e.preventDefault();
		if(!this.state.alive) {
			this.toggle(e);
		} else {
			this.setState({ fullscreen: !this.state.fullscreen });
			
		}
	},
	
	
});

module.exports = Console;


