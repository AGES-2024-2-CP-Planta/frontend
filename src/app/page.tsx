import Image from 'next/image';
import ButtonOperation from '../components/buttons/operation/button_operation';

export default function Home() {
  return (
    <main>
      <div className='flex gap-x-6 justify-center'>
        <ButtonOperation title="Criar Operação" description="Selecione Etapas para a Produção" />
        <ButtonOperation title="Cadastrar Matéria Prima" description="Cadastro de Matérias Primas para Operação" />
        <ButtonOperation title="Cadastrar Produto Final" description="Cadastro de Produtos Finais" />
      </div>
    </main>
  );
}
