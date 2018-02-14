import React from 'react'
import { Route, Link, Switch } from "react-router-dom"
import '../App.css'
import axios from "axios";
import ProfileImages from './profileImages';
import UserInfo from './UserInfo';
import SinglePhoto from './SinglePhoto';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.user.user_id, 
            user: this.props.user,
            images: [],
            userPhoto: ""
        }
    }



    getUserImages = () =>{
        const {userID}= this.state

        axios
        .get(`/users/u/${userID}/photos`)
        .then(res =>{
            let UserImages = res.data.data
                        
            console.log('this is the user images', UserImages)
            this.setState({
                images: UserImages
            })
        })

    }
    componentDidMount = () => {
    console.log('user profile is mounted')
    this.getUserImages()
        
        // axios
        //     .get('/users/') //need to get by username
        //     .then (res => {
        //         //array of objects
        //         console.log(res.data.data)
        //         console.log("res dot!!!!!! data", res.data)
        //         const photoData= res.data.data
        //         console.log("res.data.data", res.data.data)
        //         console.log(photoData.map(photo=> photo.photo_link))
        //         this.setState({
        //             user: res.data,
        //             images: res.data.data
        //         })
        //     })
        //         .catch(err => {
        //             console.log(err)
        //         })
        }
   
    render() {
        const { images,user, userID } = this.state
    console.log(this.state)
        console.log("the user is:", user)
        console.log('the user ID is', userID)
        // console.log("single photo info", SinglePhoto.authorUsername)
        return (
            <div>
                {/* <SinglePhoto /> */}
                <UserInfo user={ user } userImageURL={ images } />
                <ProfileImages images={ images } />
            </div>
        )
    }
}

export default Profile 