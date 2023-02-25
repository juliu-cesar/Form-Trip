# Formulario de registro Form Trip

## Conceito

A ideia principal foi desenvolver uma validação de formulário, e para não ficar apenas um simples formulário, desenvolvi o site com o tema de aluguel de cabanas. O usuário pode escolher uma cabana de exemplo, selecionar um data de check-in e um método de pagamento, cada qual com suas respectivas características.

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/221356861-7b0ebf43-1c8c-48e6-a516-2516f1e45492.png" height="550"/>

</div>

## Design

O design da pagina foi desenvolvido no Figma no formato para desktop e então adaptado para mobile. Ao lado temos um exemplo do design final da pagina. Atualmente conta apenas com a pagina principal

<div align="center">

https://user-images.githubusercontent.com/121033909/221358997-dc570079-1c71-4223-91f5-657d438ea49d.mp4
  
</div>

## Tecnologias utilizadas

<ul list-style="none">
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="17"/> Figma</li>
    <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="17" /> TypeScript</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="17" /> React</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092081-8feb03b4-7444-4018-a550-e704a77bc53f.svg" height="17" /> Next</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092677-03759c36-3450-4cdb-be27-24e892913862.png" height="17"/> Styled Components</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/221358245-ca4d0013-8f56-45b4-afd8-c8d6545645e7.svg" height="17"/> Ant Design</li>
</ul>

Por padrão estou utilizando o **TypeScript** como a linguagem principal, por seus inúmeros benefícios. Neste projeto, com diversas informações passando entre componentes o TypeScript se mostra muito util, tornando fácil a compreensão e implementação de objetos, funções, etc. que foram criadas ja a algum tempo.

O **React** dispensa apresentações, uma das bibliotecas mais utilizadas para desenvolvimento web, sendo alguns dos motivos, o virtual DOM, evitando a renderização de toda a pagina a cada pequena atualização, o componentes reutilizáveis e encapsulados, a performance da aplicação, entre outros.

<img src="https://user-images.githubusercontent.com/121033909/218168778-d2d3398e-c95e-40af-b8ed-af150cb9bc16.png" height="100" align="right" />
  
Com o **Next** é possível criar paginas estáticas, garantindo maior velocidade no carregamento, paginas geradas no lado do servidor(SSR), dessa forma ajudando os mecanismos de busca(SEO) a encontrar e ranquear o site, entre outros benefícios. Com uma pagina única, onde os dados são atualizados nesta mesma pagina, é um bom projeto para utilizar o Next, se beneficiando bastante de uma renderização estática.

Já trabalhei anteriormente com a biblioteca **Styled Components**, e o fator mais interessante é poder estilizar um elemento no escopo dele mesmo, ou seja, o css utilizado nesse elemento, sera aplicado somente a ele e seus elementos filhos. Isso evita colisão de CSS, conflito de classes, CSS vazando para outros elementos, etc. Os seletores CSS também são outro diferencial, poder encapsular os elementos é uma mão na roda e garante que apenas o elemento selecionado tera aquele estilo.

Utilizei a biblioteca **Ant Design** para facilitar a implementação de alguns componentes, um deles foi o *Range picker* que é o componente de check-in, onde selecionamos uma data de chegada e uma data de saída. O tempo de produção que é drasticamente reduzido, pois levaria muito tempo para produzir um componente semelhante, e principalmente polindo ele.

### Modo escuro e claro

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/221359079-e730b149-54d8-4281-acf7-7aa5b157a85e.png" height="550"/>

</div>

### Comandos utilizados para criar o projeto

Na documentação do Next na parte do TypeScript, podemos encontrar o comando para criar uma projeto com React, Next e TypeScript disponibilizado pela Vercel.

```bash
npx create-next-app@latest --ts
```

#### Comandos para inciar o projeto

```bash
npm run dev
```
