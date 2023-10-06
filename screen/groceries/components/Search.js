import { View, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchView = () => {
  return (
    <View
      style={{
        flex: 1,
        borderColor: "#ced4da",
        borderWidth: 2,
        borderRadius: 6,
        height: 40,
        padding: 8,
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: 30,
          alignContent: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faFilter} size={20} />
      </View>
    </View>
  );
};
export default SearchView;
