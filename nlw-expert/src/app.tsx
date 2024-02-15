import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return ( 
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Buscar em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            {" "}
            Adicionar nota{" "}
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida em texto
            automaticamente.{" "} 
          </p>
        </div>

        <div className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            commodi dolor quaerat similique asperiores minus vitae magni nemo
            animi iusto ducimus sapiente, error placeat ratione vel.
            Voluptatibus sequi quis ratione. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus commodi dolor quaerat similique
            asperiores minus vitae magni nemo animi iusto ducimus sapiente,
            error placeat ratione vel. Voluptatibus sequi quis ratione.
          </p>
        </div>

        <div className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
          <span className="text-sm font-medium text-slate-300">há 3 dias</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            commodi dolor quaerat similique asperiores minus vitae magni nemo
            animi iusto ducimus sapiente, error placeat ratione vel.
            Voluptatibus sequi quis ratione. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus commodi dolor quaerat similique
            asperiores minus vitae magni nemo animi iusto ducimus sapiente,
            error placeat ratione vel. Voluptatibus sequi quis ratione.
          </p>
        </div>
        
        <div className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
          <span className="text-sm font-medium text-slate-300">há 4 dias</span>

          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            commodi dolor quaerat similique asperiores minus vitae magni nemo
            animi iusto ducimus sapiente, error placeat ratione vel.
            Voluptatibus sequi quis ratione. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus commodi dolor quaerat similique
            asperiores minus vitae magni nemo animi iusto ducimus sapiente,
            error placeat ratione vel. Voluptatibus sequi quis ratione.
          </p>
        </div>

        
      </div>
    </div>
  );
}