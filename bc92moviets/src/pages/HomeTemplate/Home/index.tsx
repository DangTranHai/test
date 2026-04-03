import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListMovie } from "./Slice"
import type { AppDispatch, RootState } from "../../../store"
import Movie from "./Movie"


export default function Home() {
        const dispatch = useDispatch<AppDispatch>();
        const {loading ,data } = useSelector((state : RootState) => state.homeSlide);
        useEffect(() => {   
            dispatch(fetchListMovie());
        }, []);

        const renderListMovie = () => {
            if (data) {
                return data.map((movie) => <Movie key={movie.maPhim} movie={movie}/>);
            }


        if (loading) return <div>Loading...</div>;

        }
  return (
    <div className="container mx-auto py-8">
       {renderListMovie()}
    </div>
  )
}
