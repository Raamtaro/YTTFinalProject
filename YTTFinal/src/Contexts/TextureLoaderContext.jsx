import React, { createContext, useContext, useState, useEffect } from 'react';
import * as THREE from 'three';
import texturePaths from '../data/texturePaths';


const TextureContext = createContext();

export const useTextures = () => useContext(TextureContext)


export const TextureProvider = ({children}) =>{
    const [textures, setTextures] = useState({});
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0); 

    useEffect(() => {
        const manager = new THREE.LoadingManager(
            () => {
                setLoading(false);
            },
            (url, itemsLoaded, itemsTotal) => {
                setProgress((itemsLoaded / itemsTotal) * 100);
            },
            (url) => {
                console.error(`Error loading texture: ${url}`)
            }
        )

        const loadTextures = (paths) => {
            const loader = new THREE.TextureLoader(manager);
            const loadedTextures = {}

            Object.keys(paths).forEach((key) => {
                loadedTextures[key] = paths[key].map((path) => loader.load(path))
            })
            return loadedTextures
        };

        const loadedTextures = loadTextures(texturePaths);
        setTextures(loadedTextures);
    }, [])
}