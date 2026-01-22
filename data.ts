
import { Officer } from './types';

export const OFFICER_DATA: Officer[] = [
  // --- COMANDO GERAL (GCG) ---
  { id: 'cg-1', category: 'Comando', unit: 'GCG', rank: 'CEL', matricula: '---', name: 'PAULO AMORIM FEITOSA FILHO', role: 'Comandante Geral', contact: '98109-8500' },
  { id: 'cg-2', category: 'Comando', unit: 'GCG', rank: 'TC', matricula: '117846', name: 'THAYRONILSON EMERY DOS SANTOS', role: 'Chefe de Gabinete / Assessor CG', contact: '98825-9120' },
  { id: 'cg-3', category: 'Comando', unit: 'GCG', rank: 'TC', matricula: '114111', name: 'SANDRO RICARDO DOS SANTOS', role: 'Chefe do Núcleo de Qualidade de Vida', contact: '98829-5540' },
  { id: 'cg-4', category: 'Comando', unit: 'GCG', rank: 'CAP', matricula: '337293', name: 'ANDRE LUIS SOUZA DE FIGUEIROA', role: 'Subchefe de Gabinete do CG', contact: '98855-3175' },
  { id: 'cg-5', category: 'Comando', unit: 'GCG', rank: 'MAJ', matricula: '117528', name: 'ADEILSON LINS DE CARVALHO', role: 'Chefe da SPO', contact: '98823-8269' },
  { id: 'cg-6', category: 'Comando', unit: 'GCG', rank: 'MAJ', matricula: '121126', name: 'ARLAN SIQUEIRA DE BARROS', role: 'Chefe da SPP', contact: '99645-3134' },

  // --- SUBCOMANDO GERAL (GSCG) ---
  { id: 'scg-1', category: 'Subcomando', unit: 'GSCG', rank: 'CEL', matricula: '101621', name: 'NEYVALDO JOSÉ AMORIM DA SILVA', role: 'Subcomandante Geral', contact: '99942-6194' },
  { id: 'scg-2', category: 'Subcomando', unit: 'GSCG', rank: 'TC', matricula: '120456', name: 'MARCELO FERREIRA LIMA VALOES', role: 'Chefe Assessoria do Subcomandante Geral', contact: '98894-1958' },
  { id: 'scg-3', category: 'Subcomando', unit: 'GSCG', rank: 'TC', matricula: '102750', name: 'LUCIANA LEITE SARMENTO', role: 'Chefe da Ouvidoria Geral', contact: '99341-0407' },
  { id: 'scg-4', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '116858', name: 'JOSE PETRONIO PANTALEAO DOS SANTOS', role: 'Chefe da Ajudância Geral', contact: '99146-7710' },
  { id: 'scg-5', category: 'Subcomando', unit: 'GSCG', rank: 'CAP', matricula: '1554', name: 'IGOR SARMENTO FIRMINO', role: 'Subchefe Assessoria do Subcomandante Geral', contact: '99953-3113' },
  { id: 'scg-6', category: 'Subcomando', unit: 'GSCG', rank: 'CAP', matricula: '423983', name: 'MARIANA CESAR GOIS CAETANO TOLEDO', role: 'Subchefe Ajudância Geral / Chefe Secretaria', contact: '99610-6162' },
  { id: 'scg-7', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '1207547', name: 'JOSE ANDERSON BOMFIM BARROS', role: 'Chefe Atendimento Público (Ouvidoria)', contact: '99922-0496' },
  { id: 'scg-8', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '120421', name: 'EURICO CORREIA LEAL', role: 'Chefe Serviço Informação ao Cidadão (Ouvidoria)', contact: '98855-0898' },

  // --- ESTADO MAIOR GERAL (EMG) ---
  { id: 'emg-1', category: 'EMG', unit: 'EMG', rank: 'CEL', matricula: '9982', name: 'MACIEL PANTALEAO SILVA', role: 'Chefe do EMG', contact: '98854-1619' },
  { id: 'emg-2', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117820', name: 'SERGIO HENRIQUE LIMA DOS SANTOS', role: 'Subchefe do EMG', contact: '98702-0846' },
  { id: 'emg-3', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117595', name: 'CICERO SERCUNDINO DA SILVA', role: 'Chefe da 1ª Seção do EMG', contact: '99120-0867' },
  { id: 'emg-4', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '87270', name: 'PAULO EUGENIO DA SILVA FREITAS', role: 'Chefe da 2ª Seção do EMG', contact: '98810-5721' },
  { id: 'emg-5', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117838', name: 'SILVIO JOSE LUCIO E SILVA', role: 'Chefe da 3ª Seção do EMG', contact: '98897-2979' },
  { id: 'emg-6', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '121002', name: 'JEFFERSON SANTA RITA CANUTO', role: 'Chefe da 4ª Seção do EMG', contact: '99986-4967' },
  { id: 'emg-7', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '113212', name: 'SIDRAITON SOARES SANTOS', role: 'Chefe da 5ª Seção do EMG', contact: '98830-3319' },

  // --- CORREGEDORIA ---
  { id: 'cor-1', category: 'Administrativo', unit: 'CORREG', rank: 'TC', matricula: '117773', name: 'JOSÉ DANIEL DE LIMA NETO', role: 'Corregedor Geral', contact: '98848-4560' },
  { id: 'cor-2', category: 'Administrativo', unit: 'CORREG', rank: 'TC', matricula: '102784', name: 'CLAUDIO JOSE DA SILVA', role: 'Subcorregedor Geral', contact: '99157-7657' },

  // --- DIRETORIAS ---
  { id: 'dir-1', category: 'Diretorias', unit: 'DF', rank: 'CEL', matricula: '116564', name: 'FERNANDO GLAUCIO SANTOS LIMA', role: 'Diretor de Finanças', contact: '99973-6460' },
  { id: 'dir-2', category: 'Diretorias', unit: 'DF', rank: 'TC', matricula: '117641', name: 'EMERSON CAMARA DE CASTRO', role: 'Subdiretor de Finanças', contact: '99393-8959' },
  { id: 'dir-3', category: 'Diretorias', unit: 'DP', rank: 'TC', matricula: '117552', name: 'PHELIPE ROGERIO DOS SANTOS', role: 'Diretor de Pessoal', contact: '98807-1211' },
  { id: 'dir-4', category: 'Diretorias', unit: 'DP', rank: 'TC', matricula: '117498', name: 'GLAUCO PAES TORRES', role: 'Subdiretor de Pessoal / Chefe CSI', contact: '99997-3549' },
  { id: 'dir-5', category: 'Diretorias', unit: 'DLog', rank: 'CEL', matricula: '113972', name: 'RENILSON RODRIGUES DANTAS', role: 'Diretor de Logística', contact: '98707-5072' },
  { id: 'dir-6', category: 'Diretorias', unit: 'DLog', rank: 'TC', matricula: '117803', name: 'ROBERTO FELICIANO COSTA DA SILVA', role: 'Subdiretor de Logística', contact: '99125-4328' },
  { id: 'dir-7', category: 'Diretorias', unit: 'DI', rank: 'TC', matricula: '1200526', name: 'THIAGO DE MORAES DUARTE OLIVEIRA', role: 'Diretor de Inteligência', contact: '98882-1703' },
  { id: 'dir-8', category: 'Diretorias', unit: 'DI', rank: 'MAJ', matricula: '1206710', name: 'JOSUÉ DOS SANTOS SOUZA ELIZIÁRIO', role: 'Subdiretor de Inteligência', contact: '99801-5521' },
  { id: 'dir-9', category: 'Diretorias', unit: 'DCS', rank: 'TC', matricula: '120880', name: 'JOSIENE LIMA DOS SANTOS', role: 'Diretor de Comunicação Social', contact: '98855-2203' },
  { id: 'dir-10', category: 'Diretorias', unit: 'DCS', rank: 'TC', matricula: '113697', name: 'HEATHCLIFF DAMASCENO GAMA', role: 'Subdiretor de Comunicação Social', contact: '98865-5512' },
  { id: 'dir-11', category: 'Diretorias', unit: 'DEIP', rank: 'CEL', matricula: '427705', name: 'PEDRO JORGE BUARQUE MOURA', role: 'Diretor de Ensino, Instrução e Pesquisa', contact: '99949-7717' },
  { id: 'dir-12', category: 'Diretorias', unit: 'DEIP', rank: 'TC', matricula: '1207199', name: 'MOISÉS DE NASCIMENTO ACÁCIO', role: 'Subdiretor de Ensino, Instrução e Pesquisa', contact: '99952-0830' },
  { id: 'dir-13', category: 'Diretorias', unit: 'DPP', rank: 'CEL', matricula: '113271', name: 'NILTON ROCHA JUNIOR', role: 'Diretor de Políticas Preventivas', contact: '99818-9596' },
  { id: 'dir-14', category: 'Diretorias', unit: 'DPP', rank: 'TC', matricula: '102652', name: 'JORGE FRANCELINO TENORIO', role: 'Subdiretor de Políticas Preventivas', contact: '98833-4156' },

  // --- ENSINO E ESCOLAS ---
  { id: 'esc-1', category: 'Diretorias', unit: 'APMSAM', rank: 'CEL', matricula: '113522', name: 'CARLOS JOSE AZEVEDO SANTOS', role: 'Comandante da APMSAM', contact: '99983-3046' },
  { id: 'esc-2', category: 'Diretorias', unit: 'APMSAM', rank: 'TC', matricula: '117579', name: 'HELSON DE AZEVEDO SOUZA NETO', role: 'Subcomandante da APMSAM', contact: '99644-2161' },
  { id: 'esc-3', category: 'Diretorias', unit: 'CFAP', rank: 'MAJ', matricula: '117722', name: 'DANIEL SAMPAIO VALOES DA ROCHA', role: 'Comandante do CFAP', contact: '99998-9994' },
  { id: 'esc-4', category: 'Diretorias', unit: 'CFAP', rank: 'MAJ', matricula: '98654187', name: 'REINALDO DE LIMA BARBOSA JÚNIOR', role: 'Subcomandante do CFAP', contact: '99973-7905' },
  { id: 'esc-5', category: 'Diretorias', unit: 'DEF', rank: 'TC', matricula: '98654160', name: 'PEDRO HENRIQUE BASILIO HONORATO', role: 'Chefe do Departamento de Educação Física', contact: '98840-1041' },
  { id: 'esc-6', category: 'Diretorias', unit: 'CPM-Cap', rank: 'TC', matricula: '120995', name: 'SIDNEY INACIO CUNHA', role: 'Comandante do Colégio Militar (Capital)', contact: '98860-9550' },
  { id: 'esc-7', category: 'Diretorias', unit: 'CPM-Cap', rank: 'MAJ', matricula: '121118', name: 'RODRIGO MEDEIROS FERREIRA', role: 'Subcomandante do Colégio Militar (Capital)', contact: '98861-0206' },
  { id: 'esc-8', category: 'Diretorias', unit: 'CPM-Int', rank: 'TC', matricula: '117668', name: 'LUCIANO FELIZARDO DOS SANTOS', role: 'Comandante do Colégio Militar (Interior)', contact: '99933-2773' },
  { id: 'esc-9', category: 'Diretorias', unit: 'CPM-Int', rank: 'MAJ', matricula: '120510', name: 'JAMES MARINHO VITAL', role: 'Subcomandante do Colégio Militar (Interior)', contact: '98101-3600' },

  // --- POLICIAMENTO METROPOLITANO (CPM) ---
  { id: 'm-1', category: 'Metropolitana', unit: 'CPM', rank: 'TC', matricula: '120812', name: 'HIRAQUE AGNNES DOS SANTOS', role: 'Comandante Policiamento Metropolitano', contact: '98858-9137' },
  { id: 'm-2', category: 'Metropolitana', unit: 'CPM', rank: 'MAJ', matricula: '9865662', name: 'ALUCHAM ARAUJO FONSECA DE SENA', role: 'Subcomandante Policiamento Metropolitano', contact: '98827-0303' },
  { id: 'm-3', category: 'Metropolitana', unit: '1º BPM', rank: 'TC', matricula: '113557', name: 'LUIZ SANTOS DA SILVA', role: 'Comandante 1º BPM – Vergel do Lago', contact: '98878-2458' },
  { id: 'm-4', category: 'Metropolitana', unit: '4º BPM', rank: 'MAJ', matricula: '121045', name: 'GLAUDSON JATOBA DE OLIVEIRA', role: 'Comandante 4º BPM – Farol', contact: '99924-7832' },
  { id: 'm-5', category: 'Metropolitana', unit: '5º BPM', rank: 'TC', matricula: '547913', name: 'LUCIANO JOAO DA SILVA', role: 'Comandante 5º BPM – Benedito Bentes', contact: '98891-2642' },
  { id: 'm-6', category: 'Metropolitana', unit: '8º BPM', rank: 'MAJ', matricula: '1206567', name: 'RODRIGO VITAL VELOSO SOARES BOTELHO', role: 'Comandante 8º BPM – Rio Largo', contact: '99630-5904' },

  // --- REGIÃO SERTÃO (CPRS) ---
  { id: 'ser-1', category: 'Sertão', unit: 'CPRS', rank: 'CEL', matricula: '101753', name: 'RAIMUNDO JOSE DE FREITAS LESSA', role: 'Comandante Regional Sertão', contact: '99982-4907' },
  { id: 'ser-2', category: 'Sertão', unit: 'CPRS', rank: 'TC', matricula: '1200712', name: 'ADEMAR SIQUEIRA DA SILVA NETO', role: 'Subcomandante Regional Sertão', contact: '98833-4013' },
  { id: 'ser-3', category: 'Sertão', unit: '7º BPM', rank: 'TC', matricula: '102717', name: 'HEBERT ALEKSANDER CARVALHO DE SANTANA', role: 'Comandante 7º BPM – Santana do Ipanema', contact: '99974-7222' },

  // --- OUTROS OFICIAIS ---
  { id: 'out-1', category: 'Outros', unit: 'PMAL', rank: 'CEL', matricula: '75175', name: 'WALTER DO VALLE DE MELO JUNIOR', role: 'Oficial', contact: '99377-5959' },
  { id: 'out-2', category: 'Outros', unit: 'PMAL', rank: 'TC', matricula: '117781', name: 'JOSE PAULO COSTA VIEIRA', role: 'Oficial', contact: '99904-4114' },
];

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'Todos os Contatos',
  Comando: 'Comando Geral',
  Subcomando: 'Subcomando Geral',
  EMG: 'Estado Maior Geral',
  Metropolitana: 'Policiamento Metropolitano',
  Sertão: 'Região Sertão',
  Agreste: 'Região Agreste',
  'Norte/ZM': 'Região Norte / ZM',
  Sul: 'Região Sul',
  Especializado: 'Pol. Especializado',
  Missões: 'Missões Especiais',
  Diretorias: 'Diretorias / Ensino',
  Administrativo: 'Corregedoria',
  Outros: 'Outros Oficiais'
};
