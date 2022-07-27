import Neko from "./Neko/Neko";
import Flex from "../common/Flex";
import Button from "./../common/Button";

function Nekos(props) {
  if (
    props.initialLoadingStatus === null ||
    props.initialLoadingStatus ||
    props.shownNekoType === null
  )
    return <div>Loading...</div>;

  const nekosElementsList = props.nekosList.map((nekoItem) => (
    <Neko
      artistHref={nekoItem.artist_href}
      artistName={nekoItem.artist_name}
      sourceUrl={nekoItem.source_url}
      url={nekoItem.url}
    />
  ));

  return (
    <section>
      <Flex direction="column" align="center">
        <Flex direction="column" align="center">
          {nekosElementsList}
        </Flex>
        <section>
          {props.showMoreLoadingStatus ? <div>Loading...</div> : ""}
          <Button
            onClick={props.handleShowMoreClick}
            disabled={props.showMoreLoadingStatus}
          >
            Show more
          </Button>
        </section>
      </Flex>
    </section>
  );
}

export default Nekos;
