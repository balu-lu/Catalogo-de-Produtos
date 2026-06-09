export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-48 items-center justify-center overflow-hidden bg-slate-700">
        {imagem ? (
          <img src={imagem} alt={nome} className="h-full w-full object-cover" />
        ) : (
          <span className="text-slate-500">Sem imagem</span>
        )}
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-emerald-400">{nome}</h3>
        <p className="mb-4 flex-grow text-sm text-slate-400">{descricao}</p>
        <div className="mt-auto">
          <span className="text-2xl font-bold text-white">
            R$ {Number(preco).toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </div>
  )
}
