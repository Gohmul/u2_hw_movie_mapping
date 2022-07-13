const Genre = (props) => {
    let myColorVariable
    switch (props.genre) {
            case 'Action':
            myColorVariable = 'chartreuse'
            break
            case 'Adventure':
            myColorVariable = 'cyan'
            break
            case 'Animation':
            myColorVariable = 'darkgreen'
            break
            case 'Crime':
            myColorVariable = 'darkmagenta'
            break
            case 'Comedy':
            myColorVariable = 'darkred'
            break
            case 'Drama':
            myColorVariable = 'darkslateblue'
            break
            case 'Family':
            myColorVariable = 'deeppink'
            break
            case 'Fantasy':
            myColorVariable = 'gold'
            break
            case 'History':
            myColorVariable = 'greenyellow'
            break
            case 'Horror':
            myColorVariable = 'indianred'
            break
            case 'Mystery':
            myColorVariable = 'lavender'
            break
            case 'Music':
            myColorVariable = 'lightblue'
            break
            case 'Romance':
            myColorVariable = 'lightseagreen'
            break
            case 'Science Fiction':
            myColorVariable = 'maroon'
            break
            case 'Thriller':
            myColorVariable = 'orangered'
            break
            default:
                myColorVariable = 'white'

    }
    return (
        <div>
          {/* // EXAMPLE of inline styling WITH a variable */}
          <p style={{ backgroundColor: myColorVariable, color: 'white' }}>
            {props.genre}
          </p>
        </div>
      )
    }

    export default Genre