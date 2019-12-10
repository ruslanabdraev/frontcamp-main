import styled from 'styled-components'

const Line = styled.div`
    background-color: #858584;
    font-size: 1.5em;
	margin: 0px auto;
    padding: 6px;
    height: 40px;
`

const LeftContainer = styled.div`
    padding: 6px;
    width: 250px;
    margin: 0px 0px 0px 20px;
	float: left; 
`

const RightContainer = styled.div`
    padding: 5px;
	width: 300px;
	float: right;
`

const Panel = ({movieCount=0, onSort=f=>f}) => {
    let _release, _rating

    const handleSort = () =>{
        const sortby = _release.checked? _release.value: _rating.value

        onSort(sortby)
    }

    return (
        <Line>
            <LeftContainer>{movieCount} movie(s) found</LeftContainer>
            <RightContainer>
                SORT BY 
                <label>
                    <input type="radio" ref={release => _release = release} id="release" name="sortby" value="release" readOnly defaultChecked onClick={handleSort}/>
                    RELEASE DATE
                </label>
                <label>
                    <input type="radio" ref={rating => _rating = rating} id="rating" name="sortby" value="rating" readOnly onClick={handleSort}/>
                    RATING
                </label>
            </RightContainer>
        </Line>
)}

export default Panel