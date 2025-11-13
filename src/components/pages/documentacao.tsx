import {
  Box,
  Typography,
} from '@mui/material';
import Menu from './menu';

export default function Documentacao(){
  return (
    <>
      <Menu/>

      <Box
        sx={{
          maxWidth: '800px',
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          margin: '24px auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'flex-start', // ← Correção
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'justify' }}> {/* ← Justificação aplicada aqui */}
          <Typography variant="h4" gutterBottom>
            Base de Dados
          </Typography>

          <Typography variant="body2" gutterBottom>
            Para que o GoM funcione perfeitamente, é importante que os dados estejam devidamente padronizados e organizados. Esta seção lhe ajudará a guiar na hora de padronizar e organizar seus dados coletados para que consiga utilizar o Gomon perfeitamente.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Variáveis
          </Typography>

          <Typography variant="body2" gutterBottom>
            As variáveis internas são correspondentes as colunas da sua planilha. Elas devem ter um nome único sem espaços ou caracteres especiais, exceto pelo caractere de underline _  . 
            Seu nome deve ser intuitivo para facilitar a interpretação dos dados posteriormente nomes chaves como “Idade”, “Etnia”, “Estado” são extremamente apreciados. 
            Algumas colunas são extraída de formulários que contém perguntas completas como nome da coluna. É importante que essa conversão seja coerente para manter a consistência dos dados. Por exemplo, se foi feita a pergunta “Possui quantos filhos?” a variável pode ser renomeada para “filhos”.
            É <strong>fundamental</strong> que haja uma coluna com valores <strong>únicos</strong> de identificação, chamada obrigatoriamente de <strong>SubjID</strong>.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Valores Numéricos 
          </Typography>

          <Typography variant="body2" gutterBottom>
            Depois das variáveis selecionadas e tratadas, todas devem ter suas categorias recodificadas para cumprir a requisição de estar em formato sequencial a partir do número 1. Por exemplo, se a variável em questão for sexo não deve ter “1” para homens, “3” para mulheres e “9” para dados ausentes (*missings*) ou não resposta. Neste caso, as categorias devem ser “1” para homens, “2” para mulheres e “3” para não resposta. Ou apenas “1” para homens e “2” para mulheres, já que o GoM não requer que os *missings* sejam excluídos das variáveis. Contudo, pode ser criada uma categoria de não resposta em determinados casos.
            A única variável que não precisa estar em ordem sequencial é a de identificação “SubjID”. 
            o GoM **não** aceita variáveis incluídas no banco de dados que: 
            - sejam contínuas;
            - tenham categorias não ordenadas em sequência;
            - sejam textuais.
          </Typography>
        </Box>
      </Box>


      <Box
        sx={{
          maxWidth: '800px',
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          margin: '24px auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'flex-start', // ← Correção
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'justify' }}> {/* ← Justificação aplicada aqui */}
          <Typography variant="h4" gutterBottom>
            Campos do Formulário
          </Typography>

          <Typography variant="h5" gutterBottom>
            Número de Perfis
          </Typography>

          <Typography variant="body2" gutterBottom>
            O número de K escolhido é o que ira definir quantos perfis “puros” serão gerados. Quanto maior o valor de K, maior detalhamento terá O valor mais comum utilizado são dois perfis puros (K2). É recomendado a escolha de três perfis puros (K3) quando se tem uma quantidade maior de amostras. A utilização de quatro perfis puros (K4) é possível porém pouco recomenda uma vez que pode dificultar 
          </Typography>

          <Typography variant="h5" gutterBottom>
            Variáveis Internas
          </Typography>

          <Typography variant="body2" gutterBottom>
            Deve ser informado nome de cada coluna por campo. Não é necessário informar a coluna de identificação. 
          </Typography>
        </Box>
      </Box>


      <Box
        sx={{
          maxWidth: '800px',
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          margin: '24px auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'flex-start', // ← Correção
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'justify' }}> {/* ← Justificação aplicada aqui */}
          <Typography variant="h4" gutterBottom>
            Arquivo de Resultados
          </Typography>

          <Typography variant="body2" gutterBottom>
            Para que o GoM funcione perfeitamente, é importante que os dados estejam devidamente padronizados e organizados. 
          </Typography>

          <Typography variant="h5" gutterBottom>
            Variable
          </Typography>

          <Typography variant="body2" gutterBottom>
            O número de K escolhido é o que ira definir quantos perfis “puros” serão gerados...
          </Typography>

          <Typography variant="h5" gutterBottom>
            Variáveis Internas
          </Typography>

          <Typography variant="body2" gutterBottom>
            Deve ser informado nome de cada coluna por campo. Não é necessário informar a coluna de identificação. 
          </Typography>
        </Box>
      </Box>

    </>
  );
};
