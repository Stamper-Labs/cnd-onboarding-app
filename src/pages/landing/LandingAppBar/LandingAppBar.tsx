import DefaultAppBar from "../../../components/basics/DefaultAppBar/DefaultAppBar";
import DefaultContainer from "../../../components/basics/DefaultContainer/DefaultContainer";
import DefaultToolbar from "../../../components/basics/DefaultToolbar/DefaultToolbar";
import ToolbarActions from "../ToolbarActions/ToolbarActions";
import ToolbarLogo from "../ToolbarLogo/ToolbarLogo";

const LandingAppBar: React.FC = () => {
  return (
    <DefaultAppBar>
      <DefaultContainer>
        <DefaultToolbar>
          <ToolbarLogo />
          <ToolbarActions />
        </DefaultToolbar>
      </DefaultContainer>
    </DefaultAppBar>
  );
};

export default LandingAppBar;
