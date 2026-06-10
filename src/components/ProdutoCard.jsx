import { useState } from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid #334155;
  background-color: #1e293b;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 12rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #334155;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.25rem;
`;

const ProductTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #34d399; /* emerald-400 */
`;

const ProductDescription = styled.p`
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.875rem;
  color: #94a3b8; /* slate-400 */
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
`;

/* Requisito 3: Estilização Dinâmica
  O botão muda de cor baseado na prop $adicionado 
*/
const AddButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, filter 0.3s;
  
  background-color: ${(props) => (props.$adicionado ? '#198754' : '#6c757d')};

  &:hover {
    filter: brightness(1.1);
  }
`;

// --- COMPONENTE REACT ---

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  // Estado local para controlar se foi adicionado ao carrinho
  const [adicionado, setAdicionado] = useState(false);

  const handleCarrinho = () => {
    setAdicionado(!adicionado);
  };

  return (
    <CardContainer>
      <ImageContainer>
        {imagem ? (
          <ProductImage src={imagem} alt={nome} />
        ) : (
          <span style={{ color: '#64748b' }}>Sem imagem</span>
        )}
      </ImageContainer>
      
      <ContentContainer>
        <ProductTitle>{nome}</ProductTitle>
        <ProductDescription>{descricao}</ProductDescription>
        
        <FooterContainer>
          <Price>R$ {Number(preco).toFixed(2).replace('.', ',')}</Price>
          <AddButton 
            $adicionado={adicionado} 
            onClick={handleCarrinho}
          >
            {adicionado ? '✓ Adicionado' : 'Adicionar ao carrinho'}
          </AddButton>
        </FooterContainer>
      </ContentContainer>
    </CardContainer>
  );
}