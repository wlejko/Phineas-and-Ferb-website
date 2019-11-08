import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { ArrowDownIcon } from "../Icons/Icons";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import OneRow from "./OneRow";

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
  content: string
) {
  return (
    <>
      <Divider />
      <ExpansionPanelDetails>
        <OneRow episode={episode} name={name} date={date} content={content} />
      </ExpansionPanelDetails>
    </>
  );
}

export default function SeasonTwo() {
  const classes = useStyles();

  const fullList = [
    {
      episode: "1",
      name: "The Lake Nose Monster",
      date: "February 19, 2009",
      content: "this is episode about tehir holidays"
    },
    {
      episode: "2",
      name: "Interview With a Platypus",
      date: "February 20, 2009",
      content: "this is episode about tehir holidays"
    },
    {
      episode: "3",
      name: "Tip of the Day",
      date: "February 20, 2009",
      content: "this is episode about tehir holidays"
    },
    {
      episode: "4",
      name: "Attack of the 50-Foot Sister",
      date: "February 21, 2009",
      content: "this is episode about tehir holidays"
    },
    {
      episode: "5",
      name: "Backyard Aquarium",
      date: "February 21, 2009",
      content: "this is episode about tehir holidays"
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
          <Typography>Season 2</Typography>
        </ExpansionPanelSummary>
        {fullList.map(oneEpisode =>
          renderListOfEpisodes(
            oneEpisode.episode,
            oneEpisode.name,
            oneEpisode.date,
            oneEpisode.content
          )
        )}
      </ExpansionPanel>
    </div>
  );
}
