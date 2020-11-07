import { View, Image, Text } from "react-native";
import React from "react";
import PokeBallButton from "../../components/buttons/PokeBallButton";

import styles from "../../assets/styles";
import { TeamType } from "../../redux/actions/PokemonActionTypes";

export default function TeamContainer(team: TeamType) {
  return (
    <View style={styles.team__container} key={team.user_id}>
      <Text style={styles.team__date}>{team.date_posted}</Text>
      <Text style={styles.team__user}>{team.user_id}</Text>
      <View style={styles.team__pokemons}>
        {team.pokemons.map((pokemon) => {
          return (
            <View
              style={styles.team__pokemon}
              key={pokemon.sprites.front_default}
            >
              <Image
                style={styles.pokemonTiny}
                source={{
                  uri: `${pokemon.sprites.front_default}`,
                }}
              />
              {pokemon.stats.map((stat) => {
                return (
                  <Text style={styles.team__stat}>
                    {stat.stat.name}={stat.base_stat}
                  </Text>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}
