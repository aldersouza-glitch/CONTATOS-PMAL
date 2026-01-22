
import { Officer, CategoryGroup } from './types';

export const OFFICER_DATA: Officer[] = [
  // --- COMANDO GERAL ---
  { id: '86', category: 'Comando', unit: 'GCG', rank: 'CEL', matricula: '---', name: 'PAULO AMORIM FEITOSA FILHO', role: 'Comandante Geral', contact: '98109-8500' },
  { id: 'c1', category: 'Comando', unit: 'GCG', rank: 'TC', matricula: '117846', name: 'THAYRONILSON EMERY DOS SANTOS', role: 'Chefe de Gabinete / Assessor do CG', contact: '98825-9120' },
  { id: 'c2', category: 'Comando', unit: 'GCG', rank: 'TC', matricula: '114111', name: 'SANDRO RICARDO DOS SANTOS', role: 'Chefe do Núcleo de Qualidade de Vida', contact: '98829-5540' },
  { id: 'c3', category: 'Comando', unit: 'GCG', rank: 'CAP', matricula: '337293', name: 'ANDRE LUIS SOUZA DE FIGUEIROA', role: 'Subchefe de Gabinete do CG', contact: '98855-3175' },
  { id: 'c4', category: 'Comando', unit: 'GCG', rank: 'MAJ', matricula: '117528', name: 'ADEILSON LINS DE CARVALHO', role: 'Chefe da SPO', contact: '8823-8269' },
  { id: 'c5', category: 'Comando', unit: 'GCG', rank: 'MAJ', matricula: '121126', name: 'ARLAN SIQUEIRA DE BARROS', role: 'Chefe da SPP', contact: '99645-3134' },

  // --- SUBCOMANDO GERAL ---
  { id: '92', category: 'Subcomando', unit: 'GSCG', rank: 'CEL', matricula: '101621', name: 'NEYVALDO JOSÉ AMORIM DA SILVA', role: 'Subcomandante Geral', contact: '99942-6194' },
  { id: 's1', category: 'Subcomando', unit: 'GSCG', rank: 'TC', matricula: '120456', name: 'MARCELO FERREIRA LIMA VALOES', role: 'Chefe da Assessoria do SCG', contact: '98894-1958' },
  { id: 's2', category: 'Subcomando', unit: 'GSCG', rank: 'TC', matricula: '102750', name: 'LUCIANA LEITE SARMENTO', role: 'Chefe da Ouvidoria Geral', contact: '99341-0407' },
  { id: 's3', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '116858', name: 'JOSE PETRONIO PANTALEAO DOS SANTOS', role: 'Chefe da Ajudância Geral', contact: '99146-7710' },
  { id: 's4', category: 'Subcomando', unit: 'GSCG', rank: 'CAP', matricula: '1554', name: 'IGOR SARMENTO FIRMINO', role: 'Subchefe da Assessoria do SCG', contact: '99953-3113' },
  { id: 's5', category: 'Subcomando', unit: 'GSCG', rank: 'CAP', matricula: '423983', name: 'MARIANA CESAR GOIS CAETANO TOLEDO', role: 'Subchefe da Ajudância Geral / Chefe Sec. Ajudância', contact: '99610-6162' },
  { id: 's6', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '1207547', name: 'JOSE ANDERSON BOMFIM BARROS', role: 'Chefe da Seção de Atendimento ao Público (Ouvidoria)', contact: '99922-0496' },
  { id: 's7', category: 'Subcomando', unit: 'GSCG', rank: 'MAJ', matricula: '120421', name: 'EURICO CORREIA LEAL', role: 'Chefe da Seção de Serviço de Informação ao Cidadão', contact: '98855-0898' },

  // --- EMG E SEÇÕES ---
  { id: 'e1', category: 'EMG', unit: 'EMG', rank: 'CEL', matricula: '9982', name: 'MACIEL PANTALEAO SILVA', role: 'Chefe do EMG', contact: '98854-1619' },
  { id: 'e2', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117820', name: 'SERGIO HENRIQUE LIMA DOS SANTOS', role: 'Subchefe do EMG', contact: '98702-0846' },
  { id: 'e3', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117595', name: 'CICERO SERCUNDINO DA SILVA', role: 'Chefe da 1ª Seção do EMG', contact: '99120-0867' },
  { id: 'e4', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '87270', name: 'PAULO EUGENIO DA SILVA FREITAS', role: 'Chefe da 2ª Seção do EMG', contact: '98810-5721' },
  { id: 'e5', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '117838', name: 'SILVIO JOSE LUCIO E SILVA', role: 'Chefe da 3ª Seção do EMG', contact: '98897-2979' },
  { id: 'e6', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '121002', name: 'JEFFERSON SANTA RITA CANUTO', role: 'Chefe da 4ª Seção do EMG', contact: '99986-4967' },
  { id: 'e7', category: 'EMG', unit: 'EMG', rank: 'TC', matricula: '113212', name: 'SIDRAITON SOARES SANTOS', role: 'Chefe da 5ª Seção do EMG', contact: '98830-3319' },

  // --- CORREGEDORIA ---
  { id: 'a1', category: 'Administrativo', unit: 'CORREG', rank: 'TC', matricula: '117773', name: 'JOSÉ DANIEL DE LIMA NETO', role: 'Corregedor Geral', contact: '98848-4560' },
  { id: 'a2', category: 'Administrativo', unit: 'CORREG', rank: 'TC', matricula: '102784', name: 'CLAUDIO JOSE DA SILVA', role: 'Subcorregedor Geral', contact: '99157-7657' },

  // --- DIRETORIAS ---
  { id: 'd1', category: 'Diretorias', unit: 'DF', rank: 'CEL', matricula: '116564', name: 'FERNANDO GLAUCIO SANTOS LIMA', role: 'Diretor de Finanças', contact: '99973-6460' },
  { id: 'd2', category: 'Diretorias', unit: 'DF', rank: 'TC', matricula: '117641', name: 'EMERSON CAMARA DE CASTRO', role: 'Subdiretor de Finanças', contact: '99393-8959' },
  { id: 'd3', category: 'Diretorias', unit: 'DP', rank: 'TC', matricula: '117552', name: 'PHELIPE ROGERIO DOS SANTOS', role: 'Diretor de Pessoal', contact: '98807-1211' },
  { id: 'd4', category: 'Diretorias', unit: 'DP', rank: 'TC', matricula: '117498', name: 'GLAUCO PAES TORRES', role: 'Subdiretor de Pessoal / Chefe CSI', contact: '99997-3549' },
  { id: 'd5', category: 'Diretorias', unit: 'DLog', rank: 'CEL', matricula: '113972', name: 'RENILSON RODRIGUES DANTAS', role: 'Diretor de Logística', contact: '98707-5072' },
  { id: 'd6', category: 'Diretorias', unit: 'DLog', rank: 'TC', matricula: '117803', name: 'ROBERTO FELICIANO COSTA DA SILVA', role: 'Subdiretor de Logística', contact: '99125-4328' },
  { id: 'd7', category: 'Diretorias', unit: 'DI', rank: 'TC', matricula: '1200526', name: 'THIAGO DE MORAES DUARTE OLIVEIRA', role: 'Diretor de Inteligência', contact: '98882-1703' },
  { id: 'd8', category: 'Diretorias', unit: 'DI', rank: 'MAJ', matricula: '1206710', name: 'JOSUÉ DOS SANTOS SOUZA ELIZIÁRIO', role: 'Subdiretor de Inteligência', contact: '99801-5521' },
  { id: 'd9', category: 'Diretorias', unit: 'DCS', rank: 'TC', matricula: '120880', name: 'JOSIENE LIMA DOS SANTOS', role: 'Diretor de Comunicação Social', contact: '98855-2203' },
  { id: 'd10', category: 'Diretorias', unit: 'DCS', rank: 'TC', matricula: '113697', name: 'HEATHCLIFF DAMASCENO GAMA', role: 'Subdiretor de Comunicação Social', contact: '98865-5512' },
  { id: 'd11', category: 'Diretorias', unit: 'DEIP', rank: 'CEL', matricula: '427705', name: 'PEDRO JORGE BUARQUE MOURA', role: 'Diretor de Ensino, Instrução e Pesquisa', contact: '99949-7717' },
  { id: 'd12', category: 'Diretorias', unit: 'DEIP', rank: 'TC', matricula: '1207199', name: 'MOISÉS DE NASCIMENTO ACÁCIO', role: 'Subdiretor de Ensino, Instrução e Pesquisa', contact: '99952-0830' },
  { id: 'd13', category: 'Diretorias', unit: 'DPP', rank: 'CEL', matricula: '113271', name: 'NILTON ROCHA JUNIOR', role: 'Diretor de Políticas Preventivas', contact: '99818-9596' },
  { id: 'd14', category: 'Diretorias', unit: 'DPP', rank: 'TC', matricula: '102652', name: 'JORGE FRANCELINO TENORIO', role: 'Subdiretor de Políticas Preventivas', contact: '98833-4156' },

  // --- ENSINO E ESCOLAS ---
  { id: 'esc1', category: 'Diretorias', unit: 'APMSAM', rank: 'CEL', matricula: '113522', name: 'CARLOS JOSE AZEVEDO SANTOS', role: 'Comandante da APMSAM', contact: '99983-3046' },
  { id: 'esc2', category: 'Diretorias', unit: 'APMSAM', rank: 'TC', matricula: '117579', name: 'HELSON DE AZEVEDO SOUZA NETO', role: 'Subcomandante da APMSAM', contact: '99644-2161' },
  { id: 'esc3', category: 'Diretorias', unit: 'CFAP', rank: 'MAJ', matricula: '117722', name: 'DANIEL SAMPAIO VALOES DA ROCHA', role: 'Comandante do CFAP', contact: '99998-9994' },
  { id: 'esc4', category: 'Diretorias', unit: 'CFAP', rank: 'MAJ', matricula: '98654187', name: 'REINALDO DE LIMA BARBOSA JÚNIOR', role: 'Subcomandante do CFAP', contact: '99973-7905' },
  { id: 'esc5', category: 'Diretorias', unit: 'CPM-Cap', rank: 'TC', matricula: '120995', name: 'SIDNEY INACIO CUNHA', role: 'Comandante do Colégio Militar (Capital)', contact: '98860-9550' },
  { id: 'esc6', category: 'Diretorias', unit: 'CPM-Int', rank: 'TC', matricula: '117668', name: 'LUCIANO FELIZARDO DOS SANTOS', role: 'Comandante do Colégio Militar (Interior)', contact: '99933-2773' },

  // --- POLICIAMENTO METROPOLITANO (CPM) ---
  { id: 'm1', category: 'Metropolitana', unit: 'CPM', rank: 'TC', matricula: '120812', name: 'HIRAQUE AGNNES DOS SANTOS', role: 'Comandante do Policiamento Metropolitano', contact: '98858-9137' },
  { id: 'm2', category: 'Metropolitana', unit: 'CPM', rank: 'MAJ', matricula: '9865662', name: 'ALUCHAM ARAUJO FONSECA DE SENA', role: 'Subcomandante do Policiamento Metropolitano', contact: '98827-0303' },
  { id: 'm3', category: 'Metropolitana', unit: '1º BPM', rank: 'TC', matricula: '113557', name: 'LUIZ SANTOS DA SILVA', role: 'Comandante 1º BPM – Vergel do Lago', contact: '98878-2458' },
  { id: 'm4', category: 'Metropolitana', unit: '1º BPM', rank: 'CAP', matricula: '98653156', name: 'GRAYSON SAMUEL DA SILVA', role: 'Subcomandante 1º BPM', contact: '99909-2937' },
  { id: 'm5', category: 'Metropolitana', unit: '4º BPM', rank: 'MAJ', matricula: '121045', name: 'GLAUDSON JATOBA DE OLIVEIRA', role: 'Comandante do 4º BPM – Farol', contact: '99924-7832' },
  { id: 'm6', category: 'Metropolitana', unit: '4º BPM', rank: 'CAP', matricula: '1207504', name: 'WENDERSON VIANA GUILHERME', role: 'Subcomandante do 4º BPM', contact: '98810-1060' },
  { id: 'm7', category: 'Metropolitana', unit: '5º BPM', rank: 'TC', matricula: '547913', name: 'LUCIANO JOAO DA SILVA', role: 'Comandante do 5º BPM - Benedito Bentes', contact: '98891-2642' },
  { id: 'm8', category: 'Metropolitana', unit: '5º BPM', rank: 'CAP', matricula: '14656', name: 'WELLINGTON DOS ANJOS SILVA JUNIOR', role: 'Subcomandante do 5º BPM', contact: '98896-6280' },
  { id: 'm9', category: 'Metropolitana', unit: '8º BPM', rank: 'MAJ', matricula: '1206567', name: 'RODRIGO VITAL VELOSO SOARES BOTELHO', role: 'Comandante do 8º BPM – Rio Largo', contact: '99630-5904' },
  { id: 'm10', category: 'Metropolitana', unit: '8º BPM', rank: 'CAP', matricula: '332151', name: 'JEFFERSON CARUZO FERREIRA', role: 'Subcomandante do 8º BPM', contact: '98766-9222' },
  { id: 'm11', category: 'Metropolitana', unit: '12º BPM', rank: 'TC', matricula: '1201204', name: 'JASIEL FRANCISCO SILVA DE ANDRADE', role: 'Comandante do 12º BPM - Cidade Universitária', contact: '99992-8377' },
  { id: 'm12', category: 'Metropolitana', unit: '12º BPM', rank: 'CAP', matricula: '000051', name: 'KELMANY MARCIO DE ASSIS SILVA', role: 'Subcomandante do 12º BPM', contact: '98884-4455' },
  { id: 'm13', category: 'Metropolitana', unit: '13º BPM', rank: 'MAJ', matricula: '1206893', name: 'DANIEL SOUZA DOS SANTOS', role: 'Comandante do 13º BPM – Jacintinho', contact: '99928-2939' },
  { id: 'm14', category: 'Metropolitana', unit: '13º BPM', rank: 'CAP', matricula: '98653261', name: 'EVERTON ESTEVAN CABRAL DA SILVA', role: 'Subcomandante do 13º BPM', contact: '98746-0490' },
  { id: 'm15', category: 'Metropolitana', unit: '2ª CPM/I', rank: 'CAP', matricula: '98653059', name: 'JOSE PEDRO DOS ANJOS SILVA', role: 'Comandante da 2ª CPM/I – Paripueira', contact: '98876-8896' },
  { id: 'm16', category: 'Metropolitana', unit: '4ª CPM/I', rank: 'MAJ', matricula: '1200739', name: 'CLETIANO ANTONIO NAVARRO FERRO', role: 'Comandante da 4ª CPM/I – Marechal Deodoro', contact: '99656-8265' },
  { id: 'm17', category: 'Metropolitana', unit: '5ª CPM/I', rank: 'CAP', matricula: '1203495', name: 'FRANCISCO LUTIANE DE BRITTO', role: 'Comandante da 5ª CPM/I – Antares', contact: '98836-6853' },

  // --- REGIÃO SERTÃO (CPRS) ---
  { id: 'ser1', category: 'Sertão', unit: 'CPRS', rank: 'CEL', matricula: '101753', name: 'RAIMUNDO JOSE DE FREITAS LESSA', role: 'Comandante do Policiamento da Região Sertão', contact: '99982-4907' },
  { id: 'ser2', category: 'Sertão', unit: 'CPRS', rank: 'TC', matricula: '1200712', name: 'ADEMAR SIQUEIRA DA SILVA NETO', role: 'Subcomandante do Policiamento da Região Sertão', contact: '98833-4013' },
  { id: 'ser3', category: 'Sertão', unit: '7º BPM', rank: 'TC', matricula: '102717', name: 'HEBERT ALEKSANDER CARVALHO DE SANTANA', role: 'Comandante do 7º BPM – Santana do Ipanema', contact: '99974-7222' },
  { id: 'ser4', category: 'Sertão', unit: '9º BPM', rank: 'TC', matricula: '14575', name: 'PEDRO BARBOSA DE OLIVEIRA JUNIOR', role: 'Comandante do 9º BPM - Delmiro Gouveia', contact: '99659-6362' },
  { id: 'ser5', category: 'Sertão', unit: '6ª CPM/I', rank: 'MAJ', matricula: '113301', name: 'JORGE RODRIGUES DE MORAIS JUNIOR', role: 'Comandante da 6ª CPM/I – Batalha', contact: '99125-0056' },

  // --- REGIÃO AGRESTE (CPRA) ---
  { id: 'agr1', category: 'Agreste', unit: 'CPRA', rank: 'TC', matricula: '113743', name: 'ANAXIMANDRO TENORIO DE SA', role: 'Comandante do Policiamento da Região do Agreste', contact: '99811-4222' },
  { id: 'agr2', category: 'Agreste', unit: 'CPRA', rank: 'TC', matricula: '120766', name: 'DIOGO VITAL DE OLIVEIRA', role: 'Subcomandante do Policiamento da Região do Agreste', contact: '99902-0896' },
  { id: 'agr3', category: 'Agreste', unit: '3º BPM', rank: 'TC', matricula: '1206869', name: 'CARLOS ALBERTO MUNIZ DE ALBUQUERQUE', role: 'Comandante do 3º BPM – Arapiraca', contact: '98833-3866' },
  { id: 'agr4', category: 'Agreste', unit: '10º BPM', rank: 'MAJ', matricula: '1200631', name: 'ANTONIO ANDRE ANDRADE DE OLIVEIRA BARBOS', role: 'Comandante do 10º BPM – Palmeira dos Índios', contact: '99969-6894' },
  { id: 'agr5', category: 'Agreste', unit: '3ª CPM/I', rank: 'CAP', matricula: '498882', name: 'RODOLPHO HAMUL DE MELO MARINHO', role: 'Comandante da 3ª CPM/I – Atalaia', contact: '99829-2144' },
  { id: 'agr6', category: 'Agreste', unit: '7ª CPM/I', rank: 'MAJ', matricula: '1200593', name: 'JACKSON PEDRO DOS SANTOS LINO', role: 'Comandante da 7ª CPM/I – Girau do Ponciano', contact: '98117-8949' },

  // --- REGIÃO NORTE/ZM (CPRN-ZM) ---
  { id: 'nor1', category: 'Norte/ZM', unit: 'CPRN-ZM', rank: 'CEL', matricula: '113611', name: 'MARLON BATISTA DE ARAUJO', role: 'Comandante do Policiamento Norte / ZM', contact: '99991-3314' },
  { id: 'nor2', category: 'Norte/ZM', unit: 'CPRN-ZM', rank: 'TC', matricula: '82145', name: 'ALEX MATHIAS ANDRADE', role: 'Subcomandante do Policiamento Norte / ZM', contact: '99633-7373' },
  { id: 'nor3', category: 'Norte/ZM', unit: '2º BPM', rank: 'MAJ', matricula: '1207369', name: 'GLAUBER PATRICK DE SANTANA SANTOS', role: 'Comandante do 2º BPM – União dos Palmares', contact: '99662-0121' },
  { id: 'nor4', category: 'Norte/ZM', unit: '6º BPM', rank: 'MAJ', matricula: '1207113', name: 'ALEANDRO FERREIRA CAITANO', role: 'Comandante do 6º BPM – Maragogi', contact: '99915-8301' },
  { id: 'nor5', category: 'Norte/ZM', unit: '14º BPM', rank: 'MAJ', matricula: '117609', name: 'ADRIANO LEVY MONTEIRO SANTOS', role: 'Comandante do 14º BPM – Joaquim Gomes', contact: '99909-2449' },
  { id: 'nor6', category: 'Norte/ZM', unit: '8ª CPM/I', rank: 'MAJ', matricula: '1206877', name: 'GONZAGA DE MELO FILHO', role: 'Comandante da 8ª CPM/I – São Luís do Quitunde', contact: '99920-9405' },

  // --- REGIÃO SUL (CPRSul) ---
  { id: 'sul1', category: 'Sul', unit: 'CPRSul', rank: 'TC', matricula: '1207083', name: 'FERNANDO JOSE FERREIRA SOARES JUNIOR', role: 'Comandante do Policiamento Sul', contact: '98866-2298' },
  { id: 'sul2', category: 'Sul', unit: 'CPRSul', rank: 'TC', matricula: '1206788', name: 'MARIA ADRIANA DE SOUZA', role: 'Subcomandante do Policiamento Sul', contact: '99607-4022' },
  { id: 'sul3', category: 'Sul', unit: '11º BPM', rank: 'MAJ', matricula: '1200720', name: 'JERCIO TEIXEIRA DE FARIAS', role: 'Comandante do 11º BPM – Penedo', contact: '99629-0028' },
  { id: 'sul4', category: 'Sul', unit: '1ª CPM/I', rank: 'CAP', matricula: '98667874', name: 'LUIZ FELIPE DE OLIVEIRA ROCHA UGA CAMARA', role: 'Comandante da 1ª CPM/I – São Miguel dos Campos', contact: '99116-2198' },
  { id: 'sul5', category: 'Sul', unit: '9ª CPM/I', rank: 'MAJ', matricula: '1200488', name: 'MARCOS AURELIO RIBEIRO PEREIRA', role: 'Comandante da 9ª CPM/I – Coruripe', contact: '99629-2938' },
  { id: 'sul6', category: 'Sul', unit: '10ª CPM/I', rank: 'CAP', matricula: '1206850', name: 'ANTONIO HENRIQUE DIAS COSTA', role: 'Comandante da 10ª CPM/I – Teotônio Vilela', contact: '99694-8206' },

  // --- ESPECIALIZADO (CPE) ---
  { id: 'esp1', category: 'Especializado', unit: 'CPE', rank: 'CEL', matricula: '117560', name: 'MARIO ANTONIO DE OLIVEIRA XAVIER', role: 'Comandante do Policiamento Especializado', contact: '98151-1329' },
  { id: 'esp2', category: 'Especializado', unit: 'CPE', rank: 'TC', matricula: '117765', name: 'JOSE BARBOSA SILVA JUNIOR', role: 'Subcomandante do Policiamento Especializado', contact: '99690-0766' },
  { id: 'esp3', category: 'Especializado', unit: 'BPA', rank: 'TC', matricula: '120060', name: 'SILVIO CÉSAR DA SILVA NUNES', role: 'Comandante do BPA', contact: '98863-1542' },
  { id: 'esp4', category: 'Especializado', unit: 'BPTran', rank: 'TC', matricula: '117625', name: 'HARLEN LOPES MENDES', role: 'Comandante do BPTran', contact: '99835-4510' },
  { id: 'esp5', category: 'Especializado', unit: 'BPRv', rank: 'TC', matricula: '120642', name: 'THALVANNES JOSE BELEM RAMOS', role: 'Comandante do BPRv', contact: '98139-3227' },
  { id: 'esp6', category: 'Especializado', unit: 'BPEsc', rank: 'MAJ', matricula: '120944', name: 'NOEMI GOMES FIRMO SOARES', role: 'Comandante do BPEsc', contact: '99430-7032' },
  { id: 'esp7', category: 'Especializado', unit: 'CPM/I-Faz', rank: 'MAJ', matricula: '121096', name: 'MIZAEL LEITE PESSOA JUNIOR', role: 'Comandante da CPM/I-Faz', contact: '98805-2920' },

  // --- MISSÕES ESPECIAIS (CME) ---
  { id: 'mis1', category: 'Missões', unit: 'CME', rank: 'TC', matricula: '120707', name: 'HENRIQUE JATOBÁ CORREIA', role: 'Comandante do Comando de Missões Especiais', contact: '98885-9474' },
  { id: 'mis2', category: 'Missões', unit: 'CME', rank: 'TC', matricula: '121053', name: 'ANTONIO JORGE MOREIRA JUNIOR', role: 'Subcomandante do Comando de Missões Especiais', contact: '99663-7778' },
  { id: 'mis3', category: 'Missões', unit: 'BOPE', rank: 'TC', matricula: '1207520', name: 'DIEGO SARMENTO FIRMINO', role: 'Comandante do BOPE', contact: '99973-3680' },
  { id: 'mis4', category: 'Missões', unit: 'ROTAM', rank: 'MAJ', matricula: '1207342', name: 'HELQUIAS ALISSON SANTOS PEREIRA', role: 'Comandante da ROTAM', contact: '98831-8546' },
  { id: 'mis5', category: 'Missões', unit: 'RPMon', rank: 'MAJ', matricula: '1207318', name: 'DIEGO HENRIQUE BEZERRA VIEIRA', role: 'Comandante do RPMon', contact: '99644-8691' },
  { id: 'mis6', category: 'Missões', unit: 'COPES', rank: 'MAJ', matricula: '1207229', name: 'MIGUEL VIEIRA DOS SANTOS NETO', role: 'Comandante da COPES', contact: '99630-8899' },
  { id: 'mis7', category: 'Missões', unit: 'CPChoque', rank: 'CAP', matricula: '1449', name: 'FILLIPE ALMEIDA DE ARAUJO', role: 'Comandante da CPChoque', contact: '98867-4262' },
  { id: 'mis8', category: 'Missões', unit: 'CPM/I-RAIO', rank: 'CAP', matricula: '499013', name: 'DANIEL PITA AMARAL', role: 'Comandante da CPM/I-RAIO', contact: '98894-1367' },

  // --- OUTROS OFICIAIS (LISTA COMPLEMENTAR) ---
  { id: 'out1', category: 'Outros', unit: 'PMAL', rank: 'CEL', matricula: '75175', name: 'WALTER DO VALLE DE MELO JUNIOR', role: 'Oficial', contact: '99377-5959' },
  { id: 'out2', category: 'Outros', unit: 'PMAL', rank: 'TC', matricula: '117781', name: 'JOSE PAULO COSTA VIEIRA', role: 'Oficial', contact: '99904-4114' },
  { id: 'out3', category: 'Outros', unit: 'PMAL', rank: 'CEL', matricula: '82074', name: 'MOISES DO NASCIMENTO', role: 'Oficial', contact: '99615-4382' },
  { id: 'out4', category: 'Outros', unit: 'PMAL', rank: 'CAP', matricula: '1660', name: 'ALBENES CORDEIRO DE FARIAS', role: 'Oficial', contact: '99623-8878' },
  { id: 'out5', category: 'Outros', unit: 'PMAL', rank: 'CEL', matricula: '75078', name: 'WELLINGTON BITTENCOURT MARANHAO DE ARAUJO', role: 'Oficial', contact: '99983-4098' },
  { id: 'out6', category: 'Outros', unit: 'PMAL', rank: 'TC', matricula: '113530', name: 'JEFFERSON LUIZ TAVARES DA SILVA', role: 'Oficial', contact: '99647-5758' },
  { id: 'out7', category: 'Outros', unit: 'PMAL', rank: 'MAJ', matricula: '1206834', name: 'ANDERSON RICARDO JANUÁRIO DA SILVA', role: 'Oficial', contact: '99603-6181' },
  { id: 'out8', category: 'Outros', unit: 'PMAL', rank: 'CAP', matricula: '98653091', name: 'EBER CARLOS GÓES SALES LEÃO DE OLIVEIRA', role: 'Oficial', contact: '99970-5323' },
  { id: 'out9', category: 'Outros', unit: 'PMAL', rank: 'TC', matricula: '120928', name: 'JOSILEIDE ROMEIRO MELO DE CASTRO', role: 'Oficial', contact: '98839-6426' },
];

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'Todos os Contatos',
  Comando: 'Comando Geral',
  Subcomando: 'Subcomando Geral',
  EMG: 'Estado Maior Geral',
  Administrativo: 'Corregedoria',
  Metropolitana: 'Policiamento Metropolitano',
  Sertão: 'Região Sertão',
  Agreste: 'Região Agreste',
  'Norte/ZM': 'Região Norte / ZM',
  Sul: 'Região Sul',
  Especializado: 'Especializado',
  Missões: 'Missões Especiais',
  Diretorias: 'Diretorias / Ensino',
  Outros: 'Outros Oficiais'
};
