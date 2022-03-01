import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {createRoom,retrieveRooms,deleteRoom} from '../features/room/RoomSlice.js'

const Room = () => {
    const [roomName, setRoomName] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const rooms = useSelector(state => state.room)

    useEffect(() => {
        dispatch(retrieveRooms())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRoom({roomName,status,description}))
        resetField()
    }
    const resetField = () => {
        setRoomName('')
        setStatus('')
        setDescription('')
    }

    const RoomsList = () => {
    
        return rooms.map(room =>
          <div key={room.id} >
            <p>{room.roomName}</p>
            <button onClick={() => dispatch(deleteRoom({id:room.id}))}>x</button>
          </div>
        )
      }

    
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="roomName" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
                    <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button type="submit">ok</button>
                </form>
            </div>
            <div>
                <RoomsList />
            </div>
        </>
    )

}

export default Room
