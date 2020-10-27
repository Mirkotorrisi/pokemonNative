import { View } from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { GetTeamList } from "../redux/actions/PokemonActions";
import styles from "../assets/styles";
import TeamContainer from "../components/containers/TeamContainer";

export default function DeleteScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTeamList());
  }, []);
  const teamListState = useSelector((state: RootStore) => state.teamList);

  return (
    <View style={styles.home__container}>
      <View style={styles.container}>
        {teamListState.teamList.map((team) => {
          return <TeamContainer {...(team = team)} />;
        })}
      </View>
    </View>
  );
}
