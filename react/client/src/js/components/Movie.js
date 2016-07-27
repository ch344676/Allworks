var React = require ('react');
var ReactDOM = require ('react-dom');

var Movie = React.createClass(
{
render: function()
{

return(

<div className="Movie" id="Movie">
  <div className="row">
    <div className="col-md-4 pull-left"  id = "Poster">
		<img alt="Movie Poster" src={this.props.allMovies.Poster}/>
    </div>
		<div className="col-md-8 pull-right" id ="Data">
		  <h3 className="text-center">{this.props.allMovies.Title}</h3>
          <p>Year : {this.props.allMovies.Year}</p>
          <p>Type : {this.props.allMovies.Type}</p>
		  //<button type="submit" className="btn btn-default" id="submitButton"><b>Add</b></button>
		//  <button type="submit" className="btn btn-default" id="submitButton"><b>Update</b></button>
		//  <button type="submit" className="btn btn-default" id="submitButton"><b>Delete</b></button>
		</div>
  </div>
</div>
);
}
});

module.exports = Movie;


 