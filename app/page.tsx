import Image from 'next/image'
//import { IoMdNotifications } from 'react-icons/io';
import subject1 from '/assets/1644826783284-3. Data Structures.png';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";



export default function Home() {
  return (
    <main>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="normal-case text-xl"> Academic Time Table - 2023</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    {/*<IoMdNotifications/>*/}
  
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Subject Code</th>
        <th>Subject Name</th>
        <th>Time</th>
        <th>Date</th>
        <th>Join Link</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>EEX4465</td>
        <td>Data Structure and Algorithms</td>
        <td>9.00 am</td>
        <td>Saturday, 10th of July</td>
        <td>link here</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>EEI3362</td>
        <td>Data Modeling</td>
        <td>1.30 pm</td>
        <td>Saturday, 10th of July</td>
        <td>link here</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>MHZ4377</td>
        <td>Basic Mathematics for Computing</td>
        <td>3.30 pm</td>
        <td>Sunday, 11th of July</td>
        <td>link here</td>
      </tr>
     
    </tbody>
  </table>
</div>
<div className="card w-96 bg-base-100 shadow-xl ml-10 mb-10 mt-10">
  <figure className="px-10 pt-10">
    <Image src={subject1} alt="sub" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">EEX4465 - Data Structure and  Algorithms</h2>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Time</th>
        <th>Date</th>
        <th>Topic</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>9.00 am</td>
        <td>Saturday, 10th of July</td>
         <td>Day School 01</td>
         <td className="flex gap-5"><span><FaRegTrashAlt color="red" size={15} /></span> <span> <FiEdit color="blue" size={15} /></span></td>
       
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>1.30 pm</td>
        <td>Saturday, 10th of July</td>
        <td>Assignment 01 Due</td>
        <td className="flex gap-5"><span><FaRegTrashAlt color="red" size={15} /></span> <span> <FiEdit color="blue" size={15} /></span></td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>2.30 pm</td>
        <td>Sunday, 11th of July</td>
        <td>Quiz 01 close</td>
        <td className="flex gap-5"><span><FaRegTrashAlt color="red" size={15} /></span> <span> <FiEdit color="blue" size={15} /></span></td>
       
      </tr>
    </tbody>
  </table>
</div>
    <div className="card-actions">
      <button className="btn btn-primary">Join</button>
    </div>
  </div>
</div>
   
    </main>
  )
}
