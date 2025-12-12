import { Button } from "@mui/material";
import Menu from "./menu";
import { Github, Mail, Linkedin } from "lucide-react";
import Separator from "../separator";

export default function Sobre() {
  return (
    <>
      <Menu />
      <div className="max-w-200 pt-15">

        {/* Objetivo */}
        <div className="text-start font-medium text-2xl pb-2">Objetivo</div>
        <div className="text-start">
          Este site foi criado com o intuito de democratizar a utilização da ferramenta estatística de classificação de indivíduos Grade of Membership.
        </div>

        <Separator />

        {/* GoMRcpp */}
        <div className="text-start font-medium text-2xl pb-2">GoMRcpp</div>
        <div className="text-start">
          Aqui está o repositório contendo o script 'GoMRcpp.R' responsável por compilar os dados enviados pelo GOMON.
        </div>

        <div className="text-start flex items-center gap-2 mt-2">
          <Button
            variant="contained"
            component="a"
            href="https://github.com/julimarsp/GoMRcpp.R"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} className="mr-2" />
            Github
          </Button>
        </div>

        <Separator />

        {/* Contato */}
        <div className="text-start font-medium text-2xl pb-2">Contato</div>
        <div className="text-start">
          Caso queira entrar em contato, dar sugestões ou tirar dúvidas, sinta-se à vontade :)
        </div>

        <div className="text-start flex items-center gap-2 mt-2">

          {/* Botão GitHub */}
          <Button
            variant="contained"
            component="a"
            href="https://github.com/natalytobias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} className="mr-2" />
            Github
          </Button>

          {/* Botão Gmail */}
          <Button
            variant="contained"
            color="error"
            component="a"
            href="mailto:natalytobias@gmail.com?subject=Contato pelo GOMON&body=Olá! Gostaria de conversar sobre..."
          >
            <Mail size={15} className="mr-2" />
            Email
          </Button>

          {/* Botão LinkedIn */}
          {/* <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://www.linkedin.com/in/natalytobias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={15} className="mr-2" />
            LinkedIn
          </Button> */}

          {/* Botão Currículo Lattes */}
          <Button
            variant="contained"
            color="secondary"
            component="a"
            href="http://lattes.cnpq.br/SEU_ID_AQUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Currículo Lattes
          </Button>

        </div>

      </div>
    </>
  );
}
