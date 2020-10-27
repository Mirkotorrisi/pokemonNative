import {
  TeamType,
  PokemonDispatchTypes,
  TEAM_LIST_SUCCESS,
} from "../actions/PokemonActionTypes";

interface DefaultStateTeam {
  teamList: TeamType[];
}

const defaultState: DefaultStateTeam = {
  teamList: [],
};
const teamListReducer = (
  state: DefaultStateTeam = defaultState,
  action: PokemonDispatchTypes
): DefaultStateTeam => {
  switch (action.type) {
    case TEAM_LIST_SUCCESS:
      console.log("teams loaded");
      return {
        teamList: action.payload,
      };
    default:
      return state;
  }
};
export default teamListReducer;
