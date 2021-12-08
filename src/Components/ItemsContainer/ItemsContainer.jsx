import styled from 'styled-components';

const Container = styled.section`
    width: 80%;
    margin: 100px auto;
`;

const Header = styled.header`
    width: 100%;
    text-align: left;
    margin: 20px 0;
`

const Desc = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: rgb(70, 70, 70);
`

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    cursor: pointer;
    border: 1px solid #D8D8D8;

    &:hover .title {
        color: orangered;
    }

    @media (max-width: 1560px) {
        & {
            width: 200px;
        }

        & .title {
            font-size: 14px;
        }
    }

    @media (max-width: 1320px) { 
        & {
            width: 180px;
        }
    }
`

const Image = styled.img`
    width: inherit;
`

const TitleContainer = styled.div`
    padding: 10px 10px;
`

const Title = styled.p`
    color: #111;
    font-weight: 500;
    text-align: left;
    transition: .1s ease-in-out;
`

function ItemsContainer(props) {

    const { data, header, desc } = props;

    let itemsLists = data.map((item, index) => {
        const { attributes: { posterImage: { small }, titles: { en_jp, ja_jp } } } = item;

        if(index > 4){
            return null;
        }

        return (
            <Item key={index+1}>
                <Image src={small} alt={ja_jp} className="image"/>

                <TitleContainer>
                    <Title className="title">{en_jp}</Title>
                </TitleContainer>
            </Item>
        )
    });

    return (
        <Container>
            <Header>
                <h2>{header}</h2>
                <Desc className="desc">{desc}</Desc>
            </Header>

            <Items>
                {itemsLists}
            </Items>
        </Container>
    );
}

export default ItemsContainer;