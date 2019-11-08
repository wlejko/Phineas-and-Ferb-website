import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { ArrowDownIcon } from "../Icons/Icons";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import OneRow from "./OneRow";
import episodes from "../../images/episodes.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "5px"
    }
  })
);

function renderListOfEpisodes(
  episode: string,
  name: string,
  date: string,
  content: string,
  image: string
) {
  return (
    <>
      <Divider />
      <ExpansionPanelDetails>
        <OneRow
          episode={episode}
          name={name}
          date={date}
          content={content}
          image={image}
        />
      </ExpansionPanelDetails>
    </>
  );
}

export default function SeasonFirst() {
  const classes = useStyles();

  const fullList = [
    {
      episode: "1",
      name: "Rollercoaster",
      date: "August 17, 2007",
      content: "Dan Povenmire & Swampy Marsh (written)",
      image: episodes
    },
    {
      episode: "2",
      name: "Lawn Gnome Beach Party of Terror",
      date: "September 28, 2007",
      content:
        "Dan Povenmire, Jeff 'Swampy' Marsh, Martin Olson, Bobby Gaylor, Chris Headrick & Jon Barry Chris Headrick & Jon Barry (storyboards)",
      image: episodes
    },
    {
      episode: "3",
      name: "Flop Starz",
      date: "February 1, 2008",
      content:
        "Dan Povenmire, Jeff 'Swampy' Marsh, Sherm Cohen & Antoine Guilbaud Sherm Cohen & Antoine Guilbaud (storyboards)",
      image: episodes
    },
    {
      episode: "4",
      name: "The Fast and the Phineas",
      date: "February 2, 2008",
      content:
        "Dan Povenmire, Jeff 'Swampy' Marsh, Antoine Guilbaud & Sherm Cohen Antoine Guilbaud & Sherm Cohen (storyboards)",
      image: episodes
    },
    {
      episode: "5",
      name: "Lights, Candace, Action!",
      date: "February 3, 2008",
      content:
        "Dan Povenmire, Swampy Marsh, Martin Olson, Bobby Gaylor, Sherm Cohen & Antoine Guilbaud Sherm Cohen & Antoine Guilbaud (storyboards)",
      image: episodes
    }
  ];

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Season 1</Typography>
        </ExpansionPanelSummary>
        {fullList.map(oneEpisode =>
          renderListOfEpisodes(
            oneEpisode.episode,
            oneEpisode.name,
            oneEpisode.date,
            oneEpisode.content,
            oneEpisode.image
          )
        )}
      </ExpansionPanel>
    </div>
  );
}
