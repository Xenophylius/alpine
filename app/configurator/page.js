'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { Container } from "react-bootstrap";
import Model from "../components/Model";

export default function Configurator() {

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
    <Container className="text-center">
        <div className="container-fluid my-5 py-5">
            <div className="row justify-content-evenly">
                <Model model='pure'/>
                <Model model='legende'/>
            </div>
        </div>
    </Container>
  );
  }