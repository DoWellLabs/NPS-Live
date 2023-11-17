import App from "./App";
import "./index.scss";
import { useSelect } from "@wordpress/data";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "nps scale",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    state: {
      scaleOrientation: "horizontal",
      row: true,
      emoji: true,
      btnbg: "",
      btncolr: "",
      color: {
        btnColor: "#FFFF00",
        btnBgcolor: "",
        fntColor: "#ff0000",
        sclColor: "#FFFFFF",
        confgrFontColor: "",
        card :'1234'
      },
      scale: {
        format: "",
        width: "",
        height: "",
        lblLeft: "unlikely",
        lblCenter: "likely",
        lblRight: "most likely",
        sclRangefromA: "",
        sclRangetoB: "",
        title: "Help us improve!",
        question: "How would you rate it?",
        blockData:"434",
       
       
      },
    },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});


function EditComponent({ setAttributes }) {
  
  // const { clientId } = useSelect((select) => {
  //   const { getClientId } = select('core/block-editor');
  //   return {
  //     clientId: getClientId,
  //   };
  // });
  // console.log(clientId)
  
  
  return <App setAttributes={setAttributes} />;
}
