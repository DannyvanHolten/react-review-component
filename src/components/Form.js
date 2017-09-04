import React, {Component} from 'react';
import Star from './Star.js';

class Form extends Component {
    constructor()
    {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            rating: 1,
            name: '',
            review: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render()
    {
        return (
            <div className="review-form bg-white content-padding block-margin-top">

                <form className={this.state.isActive ? '' : 'hide'} onSubmit={this.props.submitForm}>

                    <div className="rating">
                        <span className="rating__prefix font-size-small">Beoordeling</span>
                        {this.getStar(1)}
                        {this.getStar(2)}
                        {this.getStar(3)}
                        {this.getStar(4)}
                        {this.getStar(5)}
                    </div>

                    <input type="hidden" name="rating" value={this.state.rating}/>
                    <input type="text" value={this.state.name} name="name" placeholder="Naam"
                           onChange={this.handleInputChange}/>

                    <textarea name="review" value={this.state.review} placeholder="Plaats hier je Review"
                              onChange={this.handleInputChange}/>

                    <button className="button">
                        Review plaatsen
                    </button>
                </form>

                <button className={this.state.isActive ? 'button hide' : 'button'} onClick={() => this.showForm()}>
                    Schrijf een review
                </button>

            </div>
        )
    }

    showForm()
    {
        this.setState({isActive: true});
    }

    getStar(rating)
    {
        return <Star
            rating={rating}
            isActive={this.state.rating === rating}
            onClick={() => this.clickOnStar(rating)}
        />;
    }

    clickOnStar(rating)
    {
        this.setState({rating: rating});
    }

    handleInputChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value})
    }
}

export default Form;
