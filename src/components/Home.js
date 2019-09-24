import React, { Component } from "react";
import Loader from "./Loader";
import styles from "./Home.module.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
        this.props &&
        this.props.videoDetails &&
        this.props.videoDetails.videoDetails
    };
  }
  componentDidMount() {
    this.props.getVideo();
    
    setInterval(()=>{
      this.props.updateVideo();
 
    },5000); }
  routeUser = val => {
    this.props.history.push({
      pathname: `/lesson`,
      state: {
        lesson: val
      }
    });
  };
  render() {
    console.log(
      this.props.videoDetails.videoDetails &&
        this.props.videoDetails.videoDetails.courseDetails &&
        this.props.videoDetails.videoDetails.courseDetails.userModuleDetailsV2
    );
    return (
      <React.Fragment>
        {this.props &&
          this.props.videoDetails &&
          this.props.videoDetails.repoLoader && <Loader />}
        <div className={styles.base}>
          {this.props.videoDetails.videoDetails &&
            this.props.videoDetails.videoDetails.courseDetails &&
            this.props.videoDetails.videoDetails.courseDetails.userModuleDetailsV2.map(
              (val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => this.routeUser(val.userLessonDetails)}
                  >
                    <h1>{val.name}</h1>
                    {/* <ul>
                      {val &&
                        val.userLessonDetails.map((val, i) => {
                          return (
                            <li
                              onClick={() =>
                                this.routeUser(val.userChapterDetails)
                              }
                            >
                              {val.title}
                            </li>
                          );
                        })}
                    </ul> */}
                  </div>
                );
              }
            )}
        </div>
      </React.Fragment>
    );
  }
}
