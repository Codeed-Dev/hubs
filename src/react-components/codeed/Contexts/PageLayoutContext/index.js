import React, { createContext } from "react";
import backgroundUrl from "../../../../assets/codeed/cbg.jpg";

const PageLayoutContext = createContext(null);

export const PageLayoutContextProvider = props => {
  const pageLayout = {
    name: "Codeed Meta",
    logo: "",
    title: "Bem-vindos ao Codeed.Meta",
    description:
      "Junte-se a nós para uma experiência imersiva e interativa em um mundo virtual. Conheça novas pessoas, explore novos lugares e participe de atividades exclusivas, tudo no conforto da sua própria casa.",
    backgroundImage: backgroundUrl.replace("\\", "/"),
    colors: {
      primaryColor: "",
      secodaryColor: "",
      borderColor: ""
    },
    enterButton: {
      text: "Criar Metaverso",
      icon: ""
    },
    showCodeedMetaPanel: true
  };

  return <PageLayoutContext.Provider value={pageLayout}>{props.children}</PageLayoutContext.Provider>;
};

export default PageLayoutContext;
