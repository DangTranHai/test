import type { TMovie, TResponse } from "../../../types";


type props = {
    movie : TMovie,
}

export default function Movie({ movie }: props) {
  return (
  <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
  <a href="#">
    <img className="rounded-t-base" src={movie.hinhAnh} alt={movie.tenPhim} />
  </a>
  <div className="p-6 text-center">
    
    <a href="#">
      <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{movie.tenPhim}</h5>
    </a>
    <p className="mb-4 font-normal text-body">{movie.moTa}</p>
  </div>
</div>


  )


}
