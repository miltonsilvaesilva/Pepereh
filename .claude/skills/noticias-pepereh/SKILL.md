---
name: noticias-pepereh
description: Pesquisa semanal de notícias (Angola e mundo) relevantes para a PEPEREH, redige 2–3 artigos originais em PT e EN, apresenta-os para aprovação e, só depois de aprovados, publica-os na secção Notícias do site. Usar quando o utilizador pedir para preparar, rever, aprovar ou publicar notícias/artigos do site PEPEREH, ou quando a tarefa semanal de domingo disparar.
---

# Notícias PEPEREH

O site da PEPEREH (`miltonsilvaesilva/Pepereh`) **não é um site de notícias**. A secção
Notícias serve para mostrar que a empresa acompanha o mercado e para dar credibilidade.
Por isso: poucas publicações, bem escolhidas, sempre com o ângulo
«o que isto significa para empresas e instituições em Angola».

## 1. Pesquisa (Angola + mundo)

Pesquisar notícias dos **últimos 7 dias**. Dar prioridade a fontes fiáveis
(ex.: Jornal de Angola, ANGOP, Expansão, Novo Jornal, Mercado, Ver Angola, Governo de Angola,
BNA; Reuters, Bloomberg, Financial Times, BBC, TechCrunch, The Verge, Rest of World,
Harvard Business Review, McKinsey, Banco Mundial, BAD).

Temas (por ordem de prioridade):

1. Tecnologia e transformação digital
2. Governo electrónico, Janelas Únicas, interoperabilidade, serviços públicos digitais
3. Consultoria, gestão, estratégia e melhoria de processos
4. Empreendedorismo, startups e ecossistema de inovação em Angola e África
5. Pagamentos digitais e fintech (Multicaixa Express, banca digital, BNA)
6. Investimento, economia e ambiente de negócios em Angola
7. Comércio, importação, logística e fornecimento de equipamentos
8. Mobilidade e serviços automóveis (ligação à KiPUPU)
9. Marketing digital, marcas e comunicação empresarial
10. Telecomunicações, conectividade e cibersegurança
11. Sectores da economia angolana com impacto tecnológico: energia, agro, petróleo e gás, saúde, educação
12. Regulação e políticas públicas que afectam empresas (impostos, licenciamento, protecção de dados)

Excluir: política partidária, crime, desporto, celebridades, conteúdo sensacionalista,
notícias sem fonte verificável, e qualquer assunto que possa comprometer a imagem
institucional da PEPEREH ou de clientes.

## 2. Selecção

Escolher **2 a 3** notícias (nunca mais de 3 por semana). Pelo menos uma sobre Angola
sempre que houver material relevante. Preferir temas ligados às 5 áreas da PEPEREH:
Tecnologia, Consultoria, Comércio e Fornecimento, Desenvolvimento de Negócios,
Marketing e Comunicação.

## 3. Redacção

Para cada notícia escrever um artigo **original** (nunca copiar frases da fonte):

- Português de Angola/Portugal (pré-AO90 aceite: «actividade», «projecto»), tom
  institucional, claro, sem exageros. Versão inglesa equivalente.
- Título (máx. 70 caracteres), resumo (máx. 160 caracteres), corpo com 250–450 palavras:
  1. O que aconteceu (factos, com data).
  2. Porque importa (contexto).
  3. **O que significa para empresas e instituições em Angola** (ângulo PEPEREH).
  4. Fecho discreto: sem venda agressiva; no máximo uma frase como
     «A PEPEREH acompanha estes temas na área de [área].»
- Indicar sempre a fonte com link: `Fonte: [Nome](URL)`.
- Não inventar números, citações ou declarações. Se algo não estiver confirmado, não usar.
- Sem imagens de terceiros (direitos de autor). Usar o visual padrão do site.

## 4. Formato dos ficheiros

Cada artigo é um ficheiro Markdown por idioma em `_posts/` (Jekyll / GitHub Pages):

```
_posts/AAAA-MM-DD-slug.md        # PT
_posts/AAAA-MM-DD-slug-en.md     # EN
```

Cabeçalho (front matter):

```yaml
---
layout: post
lang: pt            # ou en
ref: slug           # igual nos dois idiomas, liga PT↔EN
title: "Título"
summary: "Resumo curto"
category: Tecnologia   # Tecnologia | Consultoria | Comércio | Negócios | Marketing | Angola
source_name: "Nome da fonte"
source_url: "https://..."
---
```

Se a estrutura `_posts/` ou o layout `post` ainda não existir no repositório, criar
apenas os rascunhos e avisar o utilizador de que a secção Notícias ainda não foi montada.

## 5. Aprovação (obrigatória)

1. Criar o ramo `noticias/AAAA-MM-DD` a partir de `main` e fazer commit dos rascunhos
   **apenas nesse ramo**. Nunca publicar em `main` ou `gh-pages` nesta fase.
2. Apresentar ao utilizador, em português, para cada artigo: título, resumo, categoria,
   fonte e o texto completo em PT (a versão EN fica no ficheiro).
3. Perguntar: «Aprova a publicação? Pode aprovar todos, só alguns (ex.: "aprovar 1 e 3"),
   ou pedir alterações.»
4. Esperar resposta explícita. Sem «aprovado» / «publicar» / «sim» claro, **não publicar**.

## 6. Publicação (só depois de aprovado)

1. Retirar do ramo os artigos não aprovados; aplicar as alterações pedidas.
2. Juntar o ramo em `main` (fast-forward ou merge) e enviar `main`.
3. Actualizar o ramo publicado: `git push origin main:gh-pages`.
4. Confirmar que a publicação do GitHub Pages terminou com sucesso
   (workflow «pages build and deployment») e indicar ao utilizador os links dos artigos.

## Regras gerais

- Nunca publicar sem aprovação explícita do utilizador.
- Nunca incluir dados pessoais, dados de clientes ou informação interna da PEPEREH.
- Se não houver notícias relevantes numa semana, dizer isso em vez de forçar artigos.
