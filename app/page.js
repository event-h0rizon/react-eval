"use client"
import React, { useState, useEffect, useRef } from 'react'
import { FaFolder, FaFile, FaFolderPlus, FaFileMedical } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { RiExpandUpDownLine } from "react-icons/ri";


const Home = () => {
  const [current, setCurrent] = useState(null)
  const [currentType, setCurrentType] = useState('')
  const [fetchedType, setfetchedType] = useState('')
  const [showChildren, setShowChildern] = useState(true)
  const [array, setArray] = useState([])



  const [name, setName] = useState('')
  const [addFileTrigger, setAddFileTrigger] = useState(false)
  const [addFolderTrigger, setAddFolderTrigger] = useState(false)
  const [deleteTrigger, setDeleteTrigger] = useState(false)
  const [renameTrigger, setRenameTrigger] = useState(false)
  const [showModalAddFolder, setShowModalAddFolder] = useState(false)
  const [showModalAddFile, setShowModalAddFile] = useState(false)
  const [showModalRename, setShowModalRename] = useState(false)




  function handleChange(e) {
    setName(e.target.value)
  }



  function itemClicked(e) {
    setCurrent(e.target.id)
    setCurrentType(e.target.id)
    setShowChildern(value => !value)
  }

  function toggler() {
    if (showChildren) {
      setShowChildern(value => !value)
      array.forEach((item, index) => {
        const fileFolder = document.getElementById(`${item}`)
        fileFolder.classList.add('hidden')
      })
    }
    else {
      array.forEach((item, index) => {
        const fileFolder = document.getElementById(`${item}`)
        fileFolder.classList.remove('hidden')
      })
      setShowChildern(value => !value)
    }
  }


  function clickAddFolder(e) {
    setShowModalAddFolder(value => !value)
  }
  function clickAddFile(e) {
    setShowModalAddFile(value => !value)
  }
  function clickRename(e) {
    setShowModalRename(value => !value)
  }

  function addFolder() {
    setAddFolderTrigger(value => !value)
    setShowModalAddFolder(value => !value)
  }

  function addFile() {
    setAddFileTrigger(value => !value)
    setShowModalAddFile(value => !value)

  }
  function deleteItem(e) {
    setDeleteTrigger(value => !value)
  }
  function rename() {
    setRenameTrigger(value => !value)
    setShowModalRename(value => !value)
  }

  useEffect(() => {
    const toDelete = document.getElementById(`${current}`)

    if (toDelete) {
      toDelete.remove()
      setCurrent()
    }
    
  }, [deleteTrigger])


  useEffect(() => {
    const parent = document.getElementById(`${current}`)


    if (parent) {
      if (true) {
        const newChild = document.createElement('div');
        newChild.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>${name}`;
        newChild.classList.add('folder', 'px-4', 'py-1', 'hover:cursor-pointer');
        newChild.id = `${name}`
        parent.appendChild(newChild);
        setArray(prevArray => [...prevArray, `${name}`]);
        setName('')

      }

    }

  }, [addFolderTrigger])

  useEffect(() => {
    const parent = document.getElementById(`${current}`)


    if (parent) {
      if (true) {
        const newChild = document.createElement('div');
        newChild.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="inline mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>${name}`;
        newChild.classList.add('file', 'px-4', 'py-1', 'hover:cursor-pointer');

        newChild.id = `${name}`
        parent.appendChild(newChild);

        setArray(prevArray => [...prevArray, `${name}`]);
        setName('')

      }

    }

  }, [addFileTrigger])

  useEffect(() => {
    const getCurrentType = document.getElementById(`${current}`)?.classList

    if (getCurrentType) {
      setfetchedType(getCurrentType[0])

    }

  }, [currentType])

  useEffect(() => {

    const oldName = document.getElementById(`${current}`)
    if (oldName) {
      console.log(oldName)
      console.log(oldName.classList[0])
      if (oldName.classList[0] === 'file') {
        oldName.innerHTML = `<div id='${name}' onClick={itemClicked} className='folder px-4 py-1 hover:cursor-pointer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="inline mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>${name}</div>`
        setName('')

      }
      if (oldName.classList[0] === 'folder') {
        oldName.innerHTML = `<div id='${name}' onClick={itemClicked} className='folder px-4 py-1 hover:cursor-pointer'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline mx-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>${name}</div>`
        setName('')
      }


    }

  }, [renameTrigger])



  return (
    <div className='px-24'>
      <div className='flex justify-around py-2'>
        <button onClick={toggler} className='mx-4 my-2 text-2xl'><RiExpandUpDownLine /></button>
        <button disabled={currentType === '' || fetchedType === 'file'} className='disabled:text-gray-700 text-xl' onClick={clickAddFolder}><FaFolderPlus /></button>
        <button disabled={currentType === '' || fetchedType === 'file'} className='disabled:text-gray-700 text-xl' onClick={clickAddFile}><FaFileMedical /></button>
        <button disabled={currentType === ''} className='disabled:text-gray-700 text-xl' onClick={deleteItem}><AiFillDelete /></button>
        <button disabled={currentType === ''} className='disabled:text-gray-700 text-xl' onClick={clickRename}><MdModeEditOutline /></button>
      </div>
      <div className='flex gap-5'>
        <div id='master' className='px-4 py-2'>You have selected: {current}</div>

      </div>



      <div id='root' onClick={itemClicked} className='px-2 py-4 hover:cursor-pointer'>/root
        <div id='downloads' onClick={itemClicked} className='folder px-4 py-1 hover:cursor-pointer'><FaFolder className='inline mx-2' />downloads</div>
        <div id='desktop' onClick={itemClicked} className='folder px-4 py-1  hover:cursor-pointer'><FaFolder className='inline mx-2' />desktop</div>
        <div id='camera' onClick={itemClicked} className='folder px-4 py-1  hover:cursor-pointer'><FaFolder className='inline mx-2' />camera</div>
        <div id='music.mp3' onClick={itemClicked} className='file px-4 py-1  hover:cursor-pointer'><FaFile className='inline mx-2' />music.mp3</div>
      </div>



      {showModalAddFolder && <div className='fixed inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex gap-4 items-center'>
          <input type="text" value={name} onChange={handleChange} className='rounded-sm px-2 text-black font-semibold' placeholder='Enter name' />
          <button onClick={() => setShowModalAddFolder(value => !value)} className='border-white border-2 rounded-md px-1'>Cancel</button>
          <button onClick={addFolder} className='border-white border-2 rounded-md px-1'>Create</button>
        </div>

      </div>}

      {showModalAddFile && <div className='fixed inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex gap-4 items-center'>
          <input type="text" value={name} onChange={handleChange} className='rounded-sm px-2 text-black font-semibold' placeholder='Enter name' />
          <button onClick={() => setShowModalAddFile(value => !value)} className='border-white border-2 rounded-md px-1'>Cancel</button>
          <button onClick={addFile} className='border-white border-2 rounded-md px-1'>Create</button>
        </div>

      </div>}

      {showModalRename && <div className='fixed inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex gap-4 items-center'>
          <input type="text" value={name} onChange={handleChange} className='rounded-sm px-2 text-black font-semibold' placeholder='Enter name' />
          <button onClick={() => setShowModalRename(value => !value)} className='border-white border-2 rounded-md px-1'>Cancel</button>
          <button onClick={rename} className='border-white border-2 rounded-md px-1'>Rename</button>
        </div>

      </div>}
    </div>
  )
}

export default Home
