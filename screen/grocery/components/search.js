import { View, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Styles from "../grocerystyle";

const SearchView = () => {
  return (
    <View
      style={{
        paddingTop: 22,
        paddingHorizontal: 16,
        paddingBottom: 26,
        backgroundColor: "white",
      }}
    >
      <View style={Styles.searchView}>
        <View style={{ flex: 10, flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={20}
            style={{ color: "#ced4da", marginRight: 8 }}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Search for food and grocery store"
            cursorColor={"black"}
            autoCorrect={false}
          />
        </View>
        <View style={Styles.searchFilter}>
          <FontAwesomeIcon icon={faFilter} size={20} />
        </View>
      </View>
    </View>
  );
};
export default SearchView;
