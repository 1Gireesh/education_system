import {bookIcon, headSuitIcon, paperIcon} from "../assets/index.js";

export default function Levels() {
    return <div className="dashboard_level">
        <div className="word_level_board">
            <div className="level_head">Levels</div>
            <div className="word_level">
                <img src={bookIcon} alt=""/>
                <div className="level_progress">
                    <div className="level_name">Chassidisher Bochur</div>
                    <div className="level_progress_box">
                        <div>
                            <span>20/33 words </span>
                            <span>{13} words left</span>
                        </div>
                        <div className="level_progress_bar">
                            <div className="level_progress_complete"
                                 style={{width: `${(20 / 33) * 100}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="word_level">
                <img src={paperIcon} alt=""/>
                <div className="level_progress">
                    <div className="level_name">Shliach</div>
                    <div className="level_progress_box">
                        <div>
                            <span>18/33 words </span>
                            <span>{15} words left</span>
                        </div>
                        <div className="level_progress_bar">
                            <div className="level_progress_complete"
                                 style={{width: `${(18 / 33) * 100}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="word_level">
                <img src={headSuitIcon} alt=""/>
                <div className="level_progress">
                    <div className="level_name">Head Shliach</div>
                    <div className="level_progress_box">
                        <div>
                            <span>10/33 words </span>
                            <span>23 words left</span>
                        </div>
                        <div className="level_progress_bar">
                            <div className="level_progress_complete"
                                 style={{width: `${(10 / 33) * 100}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}