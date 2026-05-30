import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="bg-animation"></div>

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Shivam Patel</span>
        </h1>

        <h2>Juniorrr AWS Engineer ☁️</h2>

        <p>
          Building scalable cloud infrastructure, CI/CD pipelines,
          containerized applications, and highly available systems on AWS.
        </p>

        <div className="buttons">
          <a href="#">View Projects</a>
          <a href="#">Contact Me</a>
        </div>
      </motion.section>

      <section className="skills">
        <motion.div
          className="card"
          whileHover={{ scale: 1.08 }}
        >
          <h3>AWS Cloud</h3>
          <p>VPC, EC2, S3, IAM, Route53, RDS, CloudFront</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.08 }}
        >
          <h3>DevOps</h3>
          <p>Jenkins, GitHub Actions, Terraform, Linux</p>
        </motion.div>

        <motion.div
          className="card"
          whileHover={{ scale: 1.08 }}
        >
          <h3>Containers</h3>
          <p>Docker, Kubernetes, ECS, EKS</p>
        </motion.div>
{/* 
        <motion.div
          className="card"
          whileHover={{ scale: 1.08 }}
        >
          <h3>Backend</h3>
          <p>.NET Core, APIs, Redis, MySQL</p>
        </motion.div> */}
      </section>

      <motion.section
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>

        <p>
          Passionate <b>AWS Engineer</b> & <b>DevOps Engineer</b> focused on building
          secure, scalable and automated cloud environments.
          Experienced in <i>Infrastructure as Code</i>,
          CI/CD pipelines and production-grade deployments.
        </p>
      </motion.section>
    </div>
  );
}